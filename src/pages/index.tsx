import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import MainLayout from "@/layouts/MainLayout";
import HomeViews from "@/views/home/Home";

const inter = Inter({ subsets: ["latin"] });

interface IHome {
	informations: any;
	documents: any;
	news: any;
	newsLabs: any;
	newsInnovations: any;
}

export default function Home(props: IHome) {
	return (
		<>
			<Head>
				<title>PENS Aquaculture Technology</title>
				<meta
					name="description"
					content="Pascasarjana Politeknik Elektronika Negeri Surabaya"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<MainLayout>
				<HomeViews />
			</MainLayout>
		</>
	);
}
