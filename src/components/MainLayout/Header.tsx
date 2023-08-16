/* eslint-disable react-hooks/exhaustive-deps */
// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
	CloseCircleFilled,
	DownOutlined,
	LoadingOutlined,
	MenuFoldOutlined,
} from "@ant-design/icons";
import {
	Button,
	Drawer,
	DrawerProps,
	Dropdown,
	RadioChangeEvent,
	Space,
} from "antd";
import { useRouter } from "next/router";

function HeaderMainLayout() {
	const [isMobileMenuOpened, setMobileMenuOpened] = useState(false);
	const router = useRouter();
	const { pathname, asPath, query } = router;
	const isId = router.locale == "id";
	const [isOnTop, setOnTop] = useState<Boolean>(true);

	const [open, setOpen] = useState(false);
	const [placement, setPlacement] = useState<DrawerProps["placement"]>("right");

	const showDrawer = () => {
		setOpen(true);
	};

	const onChange = (e: RadioChangeEvent) => {
		setPlacement(e.target.value);
	};

	const onClose = () => {
		setOpen(false);
	};

	const handleScroll = () => {
		const position = window.pageYOffset;
		if (!position) {
			return setOnTop(true);
		}
		return setOnTop(false);
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<nav
			className={`w-full fixed z-50 flex items-center justify-between md:gap-8 duration-700 ${
				isOnTop
					? "bg-black bg-opacity-40 text-white"
					: "bg-white bg-opacity-100 text-black"
			} px-2`}
		>
			<div className="px-1 py-2 md:flex-3 lg:flex-2 items-center justify-center md:justify-start flex flex-row">
				<Link href="/">
					<div className="flex flex-row items-center gap-4">
						<Image
							className="cursor-pointer"
							src="/images/logo-aquaculture-pens.png"
							alt="Logo PENS"
							width={40}
							height={300}
						/>
						<h1 className="font-bold text-xs">PENS Aquaculture Technology</h1>
					</div>
				</Link>
			</div>
			<div className="flex flex-row flex-1 items-center justify-center px-8 hidden md:flex gap-4 md:gap-8">
				<div className="flex flex-row gap-2 flex-2 justify-end">
					<a href="#about" className="flex-1">
						<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white text-center">
							Tentang
						</div>
					</a>
					<a href="#developer" className="flex-1">
						<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white text-center">
							Pengembang
						</div>
					</a>
					<a href="#contact" className="flex-1">
						<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white text-center">
							Kontak
						</div>
					</a>
				</div>
				<div className="flex flex-row gap-2 flex-1 justify-end">
					<Link href="/auth/signin" className="flex-1">
						<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white text-center">
							Login
						</div>
					</Link>
					<Link href="/auth/signup" className="flex-1">
						<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white text-center">
							Register
						</div>
					</Link>
				</div>
			</div>
			<div className="flex md:hidden text-2xl relative -top-1">
				<button onClick={showDrawer}>
					<MenuFoldOutlined />
				</button>
			</div>
			<Drawer
				title="Menu"
				placement="right"
				width={270}
				open={open}
				onClose={onClose}
				className="md:hidden"
			>
				<div className="flex flex-col flex-1 items-center justify-center gap-4 md:gap-8 text-black text-right">
					<div className="flex flex-col gap-2 flex-2 justify-end w-full">
						<a href="#about" className="flex-1 border-b-2">
							<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white">
								Tentang
							</div>
						</a>
						<a href="#developer" className="flex-1 border-b-2">
							<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white">
								Pengembang
							</div>
						</a>
						<a href="#contact" className="flex-1 border-b-2">
							<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white">
								Kontak
							</div>
						</a>
					</div>
					<div className="flex flex-col gap-2 flex-1 justify-end w-full">
						<Link href="/auth/signin" className="flex-1 border-b-2">
							<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white">
								Login
							</div>
						</Link>
						<Link href="/auth/signup" className="flex-1 border-b-2">
							<div className="font-light text-xs px-2 py-1 hover:bg-blue-600 hover:text-white">
								Register
							</div>
						</Link>
					</div>
				</div>
			</Drawer>
		</nav>
	);
}

export default HeaderMainLayout;
