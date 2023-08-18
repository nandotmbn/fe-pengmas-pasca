import Head from "next/head";
import DashboardLayout from "@/layouts/DashboardLayout";
import PondsById from "@/views/dashboard/ponds/ById/ById";
import PoolsView from "@/views/dashboard/pools/PoolsView";

export default function Auth() {
	return (
		<>
			<Head>
				<title>Detail Kolam - PENS Aquaculture Technology</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<DashboardLayout>
				<PoolsView />
			</DashboardLayout>
		</>
	);
}
