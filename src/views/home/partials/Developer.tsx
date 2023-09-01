import Image from "next/image";
import React from "react";

function Developer() {
	return (
		<div id="developer" className="w-full">
			<div className="w-full self-center lg:w-9/12 m-auto pt-12">
				<div id="advisor" className="flex flex-col">
					<div className="flex flex-wrap justify-center text-center ">
						<div className="w-full lg:w-6/12 px-4">
							<h2 className="text-4xl font-semibold">
								Pembina
							</h2>
						</div>
					</div>
					<div className="flex flex-row w-10/12 md:w-6/12 self-center gap-8 mt-2">
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/pak_agus.png"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">
								Dr.Eng Agus Indra Gunawan S.T., M.Sc
							</p>
						</div>
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/pak_set.png"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Dr. Setiawardhana S.T., M.T</p>
						</div>
					</div>
				</div>
				<div id="developers" className="flex flex-col">
				<div className="flex flex-wrap justify-center text-center mt-4">
						<div className="w-full lg:w-6/12 px-4">
							<h2 className="text-4xl font-semibold">
								Pengembang
							</h2>
						</div>
					</div>
					<div className="grid grid-cols-2 md:grid-cols-4 w-10/12 self-center gap-8 mt-2">
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/feri.jpg"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Ferry Ariyanto</p>
						</div>
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/jon.jpg"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Torikul Huda</p>
						</div>
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/aku_1x1.png"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Orlando Pratama Tambunan</p>
						</div>
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/wafiq.png"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Muhammad Wafiq Kamaluddin</p>
						</div>
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/aldino.jpg"
								alt="Logo PENS"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Muhammad Aldino Habibullah</p>
						</div>
						<div>
							<Image
								className="cursor-pointer rounded-full"
								src="/images/santi.jpg"
								alt="Santi"
								width={800}
								height={800}
							/>
							<p className="text-center text-xs md:text-sm xl:text-base">Santi</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Developer;
