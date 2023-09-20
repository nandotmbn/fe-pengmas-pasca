/* eslint-disable react-hooks/exhaustive-deps */
import { Auth } from "@/services";
import cookiesHandler from "@/utils/storage/cookies";
import { LoadingOutlined, LoginOutlined } from "@ant-design/icons";
import { Input } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface ILoginCred {
	username: string;
	password: string;
}

function Signin() {
	const [isLoading, setLoading] = useState<boolean>(false);
	const router = useRouter();
	const [cred, _setCred] = useState<ILoginCred>({
		username: "",
		password: "",
	});

	const setCred = (label: string, value: string) => {
		_setCred({
			...cred,
			[label]: value,
		});
	};

	const checkLoggedIn = () => {
		const isLoggedIn = cookiesHandler.getCookie("access_token");
		if (!isLoggedIn) return;
		router.replace("/dashboard");
	};

	const handleLogin = async () => {
		setLoading(true);
		Auth.login({
			data: cred,
			isNotify: true,
		})
			.then((res: any) => {
				if (!res) return setLoading(false);
				cookiesHandler.setCookie(
					"access_token",
					res.data.access_token,
					9999
				);
				checkLoggedIn();
			})
			.finally(() => {
				setLoading(false);
			});
	};

	useEffect(() => {
		checkLoggedIn();
	}, []);

	return (
		<div className="h-screen flex flex-col items-center justify-center">
			<div className="flex flex-row justify-between w-72">
				<h2 className="text-2xl font-light text-gray-500">Login</h2>
				<Link
					href="/auth/signup"
					className="flex flex-row gap-2 items-center text-blue-800"
				>
					<p>Register</p> <LoginOutlined rev="string" />
				</Link>
			</div>
			<div className="w-72 px-2 py-6 bg-gray-800 rounded mt-2">
				<Image
					className="cursor-pointer m-auto"
					src="/images/logo-aquaculture-pens.png"
					alt="Logo PENS"
					width={60}
					height={300}
				/>

				<div className="mt-4">
					<div>
						<label htmlFor="username" className="text-white">
							Username
						</label>
						<Input
							onChange={(text: any) =>
								setCred("username", text.target.value)
							}
							id="username"
							name="username"
						/>
					</div>
					<div>
						<label htmlFor="password" className="text-white">
							Password
						</label>
						<Input.Password
							onChange={(text: any) =>
								setCred("password", text.target.value)
							}
							id="password"
							name="password"
						/>
					</div>
					<button
						onClick={handleLogin}
						className="mt-8 w-full bg-gray-100 text-gray-700 rounded-full py-2"
					>
						{!isLoading ? (
							<p>Login</p>
						) : (
							<LoadingOutlined rev="string" />
						)}
					</button>
				</div>
			</div>
		</div>
	);
}

export default Signin;
