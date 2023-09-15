import Head from "next/head";
import DashboardProfile from "@/views/dashboard/profile/DashboardProfile";
import DashboardLayout from "@/layouts/DashboardLayout";

export default function Profle() {
	return (
		<>
			<Head>
				<title>Daftar Tambak - PENS Aquaculture Technology</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DashboardLayout>
				<DashboardProfile/>
			</DashboardLayout>
		</>
	);
}
