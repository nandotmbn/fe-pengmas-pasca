import PondCards from "@/components/Cards/PondCards";
import { Ponds, Users } from "@/services";
import { CopyOutlined } from "@ant-design/icons";
import { message } from "antd";
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

	function buttonCopy() {
		navigator.clipboard.writeText(userData?.apiKey as string);

		message.info({
			content: "API Key: " + userData?.apiKey + " has beed copied!",
		});
	}

	useEffect(() => {
		Users.getMyProfile({ isNotify: false }).then((res: any) => {
			if (!res) return;
			setUserData(res.data);
		});

		Ponds.getAllPonds({ isNotify: true, pondsName: "" }).then((res: any) => {
			if (!res) return;
			setPondsData(res.data);
		});
	}, []);

	return (
		<div className="mt-8 px-2 lg:w-8/12 lg:m-auto lg:mt-8">
			<p className="text-sm font-bold">Hello...!!! </p>
			<p className="text-2xl font-light">{userData?.fullName}</p>

			<div className="mt-2">
				<p className="text-xs font-bold">Username</p>
				<p className="text-base font-light">{userData?.username}</p>
			</div>
			<div className="mt-2">
				<p className="text-xs font-bold">API Key</p>
				<div className="flex items-center justify-start gap-4">
					<p className="text-base font-light">{userData?.apiKey}</p>
					<button onClick={buttonCopy} className="text-gray-500">
						<CopyOutlined />
					</button>
				</div>
			</div>

			<h2 className="text-2xl font-semibold mt-8">Daftar Tambak</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{pondsData?.map((pond: IPonds, i: number) => {
					return <PondCards {...pond} key={i} />;
				})}
			</div>
		</div>
	);
}

export default DashboardHome;
