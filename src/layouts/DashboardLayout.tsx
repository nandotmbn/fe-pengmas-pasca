/* eslint-disable react-hooks/exhaustive-deps */
import DashboardHeader from "@/components/DashboardLayout/Header";
import cookiesHandler from "@/utils/storage/cookies";
import { message } from "antd";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

interface IMainLayout {
	children: JSX.Element;
}

function DashboardLayout({ children }: Readonly<IMainLayout>) {
	const router = useRouter();
	const checkLoggedIn = () => {
		const isLoggedIn = cookiesHandler.getCookie("access_token");
		if (!isLoggedIn) {
			message.info({ content: "You have to logged in first!" });
			return router.replace("/");
		}
	};

	useEffect(() => {
		checkLoggedIn();
	}, []);
	return (
		<div className="w-full">
			<div className="m-auto w-11/12 md:w-10/12 lg:8/12 xl:w-6/12">
				<DashboardHeader />
				{children}
			</div>
			{/* <FooterMainLayout /> */}
		</div>
	);
}

export default DashboardLayout;
