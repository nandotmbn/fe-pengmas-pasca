import React from "react";
import Image from "next/image";

function About() {
	return (
		<div
			id="about"
			className="flex items-center justify-center w-full flex-col bg-blue-100 py-16"
		>
			<div
				className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
				style={{ height: "80px" }}
			>
				<svg
					className="absolute bottom-0 overflow-hidden"
					xmlns="http://www.w3.org/2000/svg"
					preserveAspectRatio="none"
					version="1.1"
					viewBox="0 0 2560 100"
					x="0"
					y="0"
				>
					<polygon
						className="text-white fill-current"
						points="2560 0 2560 100 0 100"
					></polygon>
				</svg>
			</div>

			<div className="flex flex-wrap items-center mt-7">
				<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
					<Image
						alt="..."
						className="max-w-full rounded-lg shadow-lg"
						src="/images/about_tisas.jpg"
						width={800}
						height={800}
					/>
				</div>
				<div className="w-full md:w-5/12 px-4 mr-auto ml-auto">

					<h3 className="text-3xl mb-2 font-semibold leading-normal">
						Tentang Kami
					</h3>
					<p className="text-lg leading-relaxed mt-4 mb-4 text-gray-700">

					</p>
					<p className="text-lg leading-relaxed mt-0 mb-4 text-gray-700">
						TISASforINA adalah sebuah platform digital yang dibangun dengan tujuan untuk mendukung penguatan sektor budidaya perairan (akuakultur) Indonesia yang maju dan mandiri. Platform ini dibangun oleh tim Riset Grup Aquacultural Engineering Applied Technology (ACE App-Tech) Politeknik Elektronika Negeri Surabaya dan didanai oleh Direktorat Jenderal Pendidikan Vokasi, Kementerian Pendidikan dan Kebudayaan, Riset dan Teknologi, Republik Indonesia yang dikelola oleh Lembaga Pengelolaan Dana Pendidikan (LPDP) .
					</p>
				</div>
			</div>
			<div className="container mx-auto px-4">
				<div className="items-center flex flex-wrap">
					<div className="w-full md:w-5/12 ml-auto mr-auto px-4">
						<div className="md:pr-12">

							<h3 className="text-3xl font-semibold">
								Tentang TISASforINA
							</h3>
							<p className="mt-4 text-lg leading-relaxed text-gray-600">
								TISASforINA merupakan singkatan dari Totally Integrated Smart Aquaculture System for Indonesia TISASforINA adalah sebuah platform online yang menjadi tempat bertemu pengusaha, peneliti, pengajar, komunitas akuakultur (budidaya air) serta pemerintah untuk mempromosikan potensi akuakultur Indonesia.
							</p>
							<ul className="list-none mt-6">
								<li className="py-2">
									<div className="flex items-center">
										<div>
											<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
												<i className="fas fa-fingerprint"></i>
											</span>
										</div>
										<div>
											<h4 className="text-gray-600">
												VISI
											</h4>
										</div>
									</div>
								</li>
								<p>Mewujudkan sektor budidaya air untuk ketahanan pangan Indonesia yang mandiri, maju dan kuat berdasarkan keadilan dan beradab.</p>
								<li className="py-2">
									<div className="flex items-center">
										<div>
											<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-pink-600 bg-pink-200 mr-3">
												<i className="fab fa-html5"></i>
											</span>
										</div>
										<div>
											<h4 className="text-gray-600">
												MISI
											</h4>
										</div>
									</div>
								</li>
								<p>Mempertemukan dan mengkolaborasikan pengusaha, peneliti, pengajar, komunitas dan pemerintah untuk memiliki persamaan persepsi mengembangkan akuakultur Indonesia melalui penelitian, inovasi dan penerapan teknologi.</p>
							</ul>
						</div>
					</div>
					<div className="w-full md:w-4/12 ml-auto mr-auto px-4">
						<Image
							alt="..."
							className="max-w-full rounded-lg shadow-lg"
							src="/images/pengmas.jpg"
							width={800}
							height={800}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
