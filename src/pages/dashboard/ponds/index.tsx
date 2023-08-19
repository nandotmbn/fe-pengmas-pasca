import Head from "next/head";
import { Inter } from "@next/font/google";
import DashboardLayout from "@/layouts/DashboardLayout";
import DashboardPonds from "@/views/dashboard/ponds/DashboardPonds";

const inter = Inter({ subsets: ["latin"] });

export default function Auth() {
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
				<DashboardPonds />
			</DashboardLayout>
		</>
	);
}
