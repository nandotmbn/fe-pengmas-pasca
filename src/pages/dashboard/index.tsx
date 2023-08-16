import DashboardHeader from "@/components/DashboardLayout/Header";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardHome from "@/views/dashboard/home/DashboardHome";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Dashboard - PENS Aquaculture Technology</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DashboardLayout>
				<DashboardHome />
			</DashboardLayout>
		</>
	);
}
