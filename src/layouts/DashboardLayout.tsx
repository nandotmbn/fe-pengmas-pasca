import { HeaderMainLayout, FooterMainLayout } from "@/components";
import DashboardHeader from "@/components/DashboardLayout/Header";
import React from "react";

interface IMainLayout {
	children: JSX.Element;
}

function DashboardLayout({ children }: IMainLayout) {
	return (
		<div>
			<DashboardHeader />
			<div className="w-full">{children}</div>
			{/* <FooterMainLayout /> */}
		</div>
	);
}

export default DashboardLayout;
