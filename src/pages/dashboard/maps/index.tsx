import Head from "next/head";
import { Inter } from "@next/font/google";
import DashboardLayout from "@/layouts/DashboardLayout";
import dynamic from "next/dynamic";

const inter = Inter({ subsets: ["latin"] });

const DynamicMap = dynamic(() => import('@/views/dashboard/maps/DashboardMap'), {
  loading: () => <p>Loading...</p>,
	ssr: false
})

export default function Maps() {
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
				<DynamicMap />
			</DashboardLayout>
		</>
	);
}
