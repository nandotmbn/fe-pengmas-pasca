import React from "react";

function About() {
	return (
		<div
			id="about"
			className="flex items-center justify-center w-full flex-col bg-blue-100 py-16"
		>
			<h2 className="text-2xl font-semibold underline text-blue-900">
				Tentang Kami
			</h2>
			<div className="flex flex-col w-11/12 md:flex-row md:gap-8 md:w-9/12 lg:w-6/12">
				<p className="font-light text-xs text-center flex items-center mt-4 flex-1 border-blue-400 border-2 rounded-xl p-1">
					TISASforINA merupakan singkatan dari Totally Integrated Smart
					Aquaculture System for Indonesia TISASforINA adalah sebuah platform
					online yang menjadi tempat bertemu pengusaha, peneliti, pengajar,
					komunitas akuakultur (budidaya air) serta pemerintah untuk
					mempromosikan potensi akuakultur Indonesia..
				</p>
				<p className="font-light text-xs text-center flex items-center mt-4 flex-1 border-blue-400 border-2 rounded-xl p-1">
					TISASforINA adalah sebuah platform digital yang dibangun dengan tujuan
					untuk mendukung penguatan sektor budidaya perairan (akuakultur)
					Indonesia yang maju dan mandiri. Platform ini dibangun oleh tim Riset
					Grup Aquacultural Engineering Applied Technology (ACE App-Tech)
					Politeknik Elektronika Negeri Surabaya dan didanai oleh Direktorat
					Jenderal Pendidikan Vokasi, Kementerian Pendidikan dan Kebudayaan,
					Riset dan Teknologi, Republik Indonesia yang dikelola oleh Lembaga
					Pengelolaan Dana Pendidikan (LPDP).
				</p>
			</div>
			<h2 className="text-2xl font-semibold underline text-blue-900 pt-16">
				Visi dan Misi
			</h2>
			<div className="flex flex-col w-11/12 md:flex-row md:gap-8 md:w-9/12 lg:w-6/12">
				<p className="font-light text-xs text-center mt-4 flex-1 flex items-center border-blue-400 border-2 rounded-xl p-1">
					Mewujudkan sektor budidaya air untuk ketahanan pangan Indonesia yang
					mandiri, maju dan kuat berdasarkan keadilan dan beradab.
				</p>
				<p className="font-light text-xs text-center mt-4 flex-1 flex items-center border-blue-400 border-2 rounded-xl p-1">
					Mempertemukan dan mengkolaborasikan pengusaha, peneliti, pengajar,
					komunitas dan pemerintah untuk memiliki persamaan persepsi
					mengembangkan akuakultur Indonesia melalui penelitian, inovasi dan
					penerapan teknologi.
				</p>
			</div>
		</div>
	);
}

export default About;
