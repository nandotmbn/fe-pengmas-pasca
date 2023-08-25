/* eslint-disable react-hooks/exhaustive-deps */
import PondCards from "@/components/Cards/PondCards";
import CenterEmpty from "@/components/Empty/CenterEmpty";
import { Ponds, Users } from "@/services";
import cookiesHandler from "@/utils/storage/cookies";
import { CopyOutlined } from "@ant-design/icons";
import { message, Skeleton } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface IUserData {
	fullName: string;
	username: string;
	apiKey: string;
}

interface IPonds {
	_id: string;
	pondsName: string;
	userId: string;
	cityId: string;
}

function DashboardHome() {
	const [userData, setUserData] = useState<IUserData>();
	const [pondsData, setPondsData] = useState<IPonds[]>();
	const router = useRouter();

	function buttonCopy() {
		navigator.clipboard.writeText(userData?.apiKey as string);

		message.info({
			content: "API Key: " + userData?.apiKey + " has beed copied!",
		});
	}

	const getPonds = async () => {
		Ponds.getAllPonds({
			isNotify: true,
			pondsName: "",
			limit: 2,
			page: 1,
			cityId: "",
			provinceId: "",
		}).then((res: any) => {
			if (!res) return;
			setPondsData(res.data);
		});
	};

	useEffect(() => {
		Users.getMyProfile({ isNotify: false }).then((res: any) => {
			if (!res) {
				cookiesHandler.deleteCookie("access_token");
				router.replace("/");
				return;
			}
			setUserData(res.data);
		});

		getPonds();
	}, []);

	return (
		<div className="mt-8 px-2 lg:mt-8 pb-16">
			<p className="text-sm font-bold">Hello...!!! </p>
			{userData?.fullName ? (
				<p className="text-2xl font-light">{userData?.fullName}</p>
			) : (
				<Skeleton.Button
					active={true}
					size="small"
					shape="default"
					block={true}
				/>
			)}

			<div className="mt-2">
				<p className="text-xs font-bold">Username</p>
				{userData?.username ? (
					<p className="text-base font-light">{userData?.username}</p>
				) : (
					<Skeleton.Button
						active={true}
						size="small"
						shape="default"
						block={true}
					/>
				)}
			</div>
			<div className="mt-2">
				<p className="text-xs font-bold">API Key</p>
				{userData?.apiKey ? (
					<div className="flex items-center justify-start gap-4">
						<p className="text-base font-light">{userData?.apiKey}</p>
						<button onClick={buttonCopy} className="text-gray-500">
							<CopyOutlined />
						</button>
					</div>
				) : (
					<Skeleton.Button
						active={true}
						size="small"
						shape="default"
						block={true}
					/>
				)}
			</div>

			<h2 className="text-2xl font-semibold mt-8">Daftar Tambak</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{pondsData?.map((pond: IPonds, i: number) => {
					return (
						<PondCards listRefresher={() => getPonds()} {...pond} key={i} />
					);
				})}
			</div>
			<Link href="/dashboard/ponds">
				<p className="text-blue-600 w-full text-right mt-2">
					Lihat lainnya. . . .
				</p>
			</Link>
			{!pondsData?.length && <CenterEmpty message="Tambak tidak ditemukan" />}
		</div>
	);
}

export default DashboardHome;
