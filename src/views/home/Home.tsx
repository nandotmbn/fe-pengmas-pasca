import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import About from "./partials/About";
import Developer from "./partials/Developer";
import Footer from "./partials/Footer";
import Sponsor from "./partials/Sponsor";

function HomeViews() {
	const { locale } = useRouter();
	const isId = locale == "id";
	const [searchText, setSearchText] = useState("");
	return (
		<div className={`w-full flex flex-col -top-2 relative`}>
			<div
				className="w-full h-screen"
				style={{
					backgroundImage: `url('/images/jumbotron.jpg')`,
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center",
				}}
			>
				<div className="relative inset-0 h-full w-full m-auto bg-black bg-opacity-40 flex flex-col items-center justify-center">
					<div className="w-11/12 lg:w-6/12 items-center flex flex-col justify-center relative -top-10">
						<div>
							<Image
								className="contain relative w-16 h-16 md:w-44 md:h-44 rounded-full"
								src="/images/logo-aquaculture-pens.png"
								alt="Jumbotron PENS"
								width={720}
								height={720}
								unoptimized={true}
							/>
						</div>
						<h2 className="text-2xl font-light text-white text-center">
							Riset Grup
						</h2>
						<h2 className="text-2xl font-light text-white text-center hidden md:flex">
							|
						</h2>
						<h2 className="text-2xl font-light text-white text-center">
							Penerapan Teknologi Elektro untuk Teknologi Akuakultur
						</h2>
						<a href="#content" className="text-white bg-gray-700 px-4 py-2 rounded mt-4">
							<p>Lanjutkan Baca</p>
						</a>
						<div className="flex-row flex items-center">
							<p className="text-white">__________</p>
							<p className="z-5 bg-transparent text-white">ATAU</p>
							<p className="text-white">__________</p>
						</div>
						<Link href="/auth/signup" className="text-white bg-gray-700 px-4 py-2 rounded mt-4">
							<p>Memulai</p>
						</Link>
					</div>
				</div>
			</div>
			
			<div id="content" className='flex flex-col items-center justify-center w-full'>
				<About />
				<Developer />
				
			</div>
			<Sponsor />
			<Footer />
		</div>
	);
}

export default HomeViews;
