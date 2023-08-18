import React from "react";
export default function Footer() {
	return (
		<footer className=" w-full bg-gray-300">
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
					<div className="w-full px-4 lg:w-6/12">
						<h4 className="text-3xl font-semibold">
							Sosial Media Kami
						</h4>
						<h5 className="mb-2 mt-0 text-lg text-gray-700">
							Ikuti kami di sosial media kami dibawah ini
						</h5>
						<div className="mt-6">
							<button
								className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-400 shadow-lg outline-none focus:outline-none"
								type="button"
							>
								<i className="fab fa-twitter flex"></i>
							</button>
							<button
								className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-blue-600 shadow-lg outline-none focus:outline-none"
								type="button"
							>
								<i className="fab fa-facebook-square flex"></i>
							</button>
							<button
								className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-pink-400 shadow-lg outline-none focus:outline-none"
								type="button"
							>
								<i className="fab fa-dribbble flex"></i>
							</button>
							<button
								className="align-center mr-2 h-10 w-10 items-center justify-center rounded-full bg-white p-3 font-normal text-gray-900 shadow-lg outline-none focus:outline-none"
								type="button"
							>
								<i className="fab fa-github flex"></i>
							</button>
						</div>
					</div>
					<div className="w-full px-4 lg:w-6/12">
						<div className="items-top mb-6 flex flex-wrap">
							<div className="ml-auto w-full px-4 lg:w-4/12">
								<span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
									Useful Links
								</span>
								<ul className="list-unstyled">
									<li>
										<a
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://www.creative-tim.com/presentation"
										>
											About Us
										</a>
									</li>
									<li>
										<a
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://blog.creative-tim.com"
										>
											Blog
										</a>
									</li>
									<li>
										<a
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://www.github.com/creativetimofficial"
										>
											Github
										</a>
									</li>
								</ul>
							</div>
							<div className="w-full px-4 lg:w-4/12">
								<span className="mb-2 block text-sm font-semibold uppercase text-gray-600">
									About
								</span>
								<ul className="list-unstyled">
									<li>
										<a
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
										>
											Aquaculture
										</a>
									</li>
									<li>
										<a
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://creative-tim.com/terms"
										>
											Tisasforina
										</a>
									</li>
									<li>
										<a
											className="block pb-2 text-sm font-semibold text-gray-700 hover:text-gray-900"
											href="https://creative-tim.com/privacy"
										>
											Pens
										</a>
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
