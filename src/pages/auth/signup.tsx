import Head from "next/head";
import { Inter } from "@next/font/google";
import MainLayout from "@/layouts/MainLayout";
import Signup from "@/views/auth/signin/Signup";

const inter = Inter({ subsets: ["latin"] });

export default function Auth() {
	return (
		<>
			<Head>
				<title>Daftar - PENS Aquaculture Technology</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Signup />
		</>
	);
}
