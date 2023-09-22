import Link from "next/link";
import React from "react";
export default function Footer() {
	return (
		<footer id="contact" className=" w-full bg-gray-300">
			<div className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 h-20 w-full overflow-hidden">
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
						className="fill-current text-gray-300"
						points="2560 0 2560 100 0 100"
					></polygon>
				</svg>
			</div>
			<div className="container mx-auto px-4">
				<div className="flex flex-wrap">
					<div className="w-full px-4 mt-6 lg:w-6/12">
						<h4 className="text-3xl font-semibold">
							Lokasi Kami
						</h4>
						<h5 className="mb-2 mt-0 text-lg text-gray-700">
							Ruang PS 4.17. Politeknik Elektronika Negeri Surabaya
						</h5>
						<div className="mt-6 overflow-hidden">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15830.737602343857!2d112.78725204769763!3d-7.276706145621895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fa10ea2ae883%3A0xbe22c55d60ef09c7!2sPoliteknik%20Elektronika%20Negeri%20Surabaya!5e0!3m2!1sen!2sid!4v1692591292899!5m2!1sen!2sid" width="500" height="150" loading="lazy" className="aspect-video"></iframe>
						</div>
					</div>
					<div className="w-full px-4 lg:w-6/12">
						<div className="items-top mb-6 flex flex-wrap">
							<div className="ml-auto w-full mt-8  px-4 lg:w-4/12">
								<span className="mb-2 block text-lg font-semibold uppercase text-gray-600">
									Link Terkait
								</span>
								<ul className="list-unstyled">
									<li className="pb-2">
										<Link
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://www.creative-tim.com/presentation" target="_blank"
										>
											Cuaca Global
										</Link>
									</li>
									<li className="pb-2">
										<Link
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://blog.creative-tim.com" target="_blank"
										>
											Data Iklim
										</Link>
									</li>
									<li className="pb-2">
										<Link
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://www.timeanddate.com/moon/phases/" target="_blank"
										>
											Fase Bulan
										</Link>
									</li>
								</ul>
							</div>
							<div className="w-full px-4 mt-8 lg:w-4/12">
								<span className="mb-2 block text-lg font-semibold uppercase text-gray-600">
								 	Tentang Kami
								</span>
								<ul className="list-unstyled">
									<li className="pb-2">
										<Link
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://www.pens.ac.id/en/" target="_blank"
										>
											Pens
										</Link>
									</li>
									<li className="pb-2">
										<Link
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://www.nationalgeographic.com/foodfeatures/aquaculture/" target="_blank"
										>
											Aquaculture
										</Link>
									</li>
									<li className="pb-2">
										<Link
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="#about"
										>
											Tisasforina
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr className="my-6 border-gray-400" />
				<div className="flex flex-wrap items-center justify-center md:justify-between">
					<div className="mx-auto w-full px-4 text-center md:w-4/12">
						<div className="py-1 text-sm font-semibold text-gray-600">
							Copyright © {new Date().getFullYear()} by{' '}
							<a
								href="https://www.creative-tim.com"
								className="text-gray-600 hover:text-gray-900"
							>
								AquaculturePens
							</a>
							.
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}
