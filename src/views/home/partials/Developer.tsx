import Image from "next/image";
import React from "react";

function Developer() {
	return (
		<div id="developer" className="h-screen w-full">
			<div className="w-full self-center lg:w-9/12 m-auto">
				<div id="advisor" className="flex flex-col">
					<h2 className="text-center text-2xl mt-4">Pembina</h2>
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
					<h2 className="text-center text-xl mt-4">Pengembang</h2>
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
								src="/images/aku_1x1.jpg"
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
					</div>
				</div>
			</div>
		</div>
	);
}

export default Developer;
