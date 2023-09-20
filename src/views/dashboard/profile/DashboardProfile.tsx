/* eslint-disable react-hooks/exhaustive-deps */
import PondCards from "@/components/Cards/PondCards";
import CenterEmpty from "@/components/Empty/CenterEmpty";
import { Ponds, Users } from "@/services";
import cookiesHandler from "@/utils/storage/cookies";
import { CopyOutlined } from "@ant-design/icons";
import { message, Skeleton } from "antd";
import Link from "next/link";
import { useRouter, } from "next/router";
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

function DashboardProfile() {
	const [userData, setUserData] = useState<IUserData>();
	const [pondsData, setPondsData] = useState<IPonds[]>();
	const router = useRouter();

	function logout() {
		cookiesHandler.deleteCookie("access_token");
		router.replace("/");
	}

	function buttonCopy() {
		navigator.clipboard.writeText(userData?.apiKey as string);

		message.info({
			content: "User ID: " + userData?.apiKey + " has beed copied!",
		});
	}

	useEffect(() => {
		Users.getMyProfile({ isNotify: false }).then((res: any) => {
			if (!res) {
				cookiesHandler.deleteCookie("access_token");
				router.replace("/");
				return;
			}
			setUserData(res.data);
		});


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
				<p className="text-xs font-bold">User ID</p>
				{userData?.apiKey ? (
					<div className="flex items-center justify-start gap-4">
						<p className="text-base font-light">{userData?.apiKey}</p>
						<button onClick={buttonCopy} className="text-gray-500">
							<CopyOutlined rev="string" />
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
			<button onClick={logout} className="flex-1 border-b-2">
				<div className="mt-6 rounded-lg font-light text-xs px-2 py-1 bg-blue-600 text-white hover:bg-blue-400">
					Logout
				</div>
			</button>
		</div>
	);
}

export default DashboardProfile;
