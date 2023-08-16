import React, { useState } from "react";
import {
	AppstoreOutlined,
	MailOutlined,
	SettingOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import Image from "next/image";
import Link from "next/link";

const DashboardHeader = () => {
	const [current, setCurrent] = useState("mail");

	const onClick: MenuProps["onClick"] = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
	};

	return (
		<div className="w-full">
			<div className="flex flex-row items-center w-full justify-center gap-4 py-2">
				<Image
					className="cursor-pointer"
					src="/images/logo-aquaculture-pens.png"
					alt="Logo PENS"
					width={40}
					height={300}
				/>
				<h1 className="font-bold text-xs">PENS Aquaculture Technology</h1>
			</div>
			<ul className="w-full flex flex-row items-center justify-evenly md:w-4/12 lg:w-3/12 xl:w-2/12 text-xs mt-4 gap-4">
				<li className="flex-1 text-center">
					<Link href="/dashboard">
						<p>Beranda</p>
					</Link>
				</li>
				<li className="flex-1 text-center">
					<Link href="/dashboard/ponds">
						<p>Tambak</p>
					</Link>
				</li>
				<li className="flex-1 text-center">
					<Link href="/dashboard/accounts">
						<p>Akun</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardHeader;
