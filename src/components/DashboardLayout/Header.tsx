/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const DashboardHeader = () => {
	const router = useRouter();

	const defineStyleNav = (label: string | undefined) => {
		const route = router.asPath;
		if (route.split("/")[2] == label) {
			return `bg-blue-400 text-white border-blue-200`;
		}
		return "";
	};

	useEffect(() => {}, []);

	return (
		<div className="w-full">
			<div className="flex flex-row items-center w-full justify-center gap-4 py-2">
				<Link href="/" className="flex flex-row items-center gap-4">
					<Image
						className="cursor-pointer"
						src="/images/logo-aquaculture-pens.png"
						alt="Logo PENS"
						width={40}
						height={300}
					/>
					<h1 className="font-bold text-xs">PENS Aquaculture Technology</h1>
				</Link>
			</div>
			<ul className="w-full flex flex-row items-center justify-evenly text-xs mt-4 gap-4">
				<li
					className={`flex-1 text-center rounded py-2 border-b-4 border-blue-800 hover:border-blue-400 ${defineStyleNav(
						undefined
					)}`}
				>
					<Link href="/dashboard">
						<p>Beranda</p>
					</Link>
				</li>
				<li
					className={`flex-1 text-center rounded py-2 border-b-4 border-blue-800 hover:border-blue-400 ${defineStyleNav(
						"ponds"
					)}`}
				>
					<Link href="/dashboard/ponds">
						<p>Tambak</p>
					</Link>
				</li>
				<li
					className={`flex-1 text-center rounded py-2 border-b-4 border-blue-800 hover:border-blue-400 ${defineStyleNav(
						"profile"
					)}`}
				>
					<Link href="/dashboard/profile">
						<p>Akun</p>
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default DashboardHeader;
