/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { Cities, Ponds, Pools, Provinces } from "@/services";
import AddNewPools from "./partials/AddNewPools";
import CenterEmpty from "@/components/Empty/CenterEmpty";
import PoolCards from "@/components/Cards/PoolCards";
import Link from "next/link";
import { ArrowLeftOutlined, BackwardFilled } from "@ant-design/icons";

interface IUserData {
	fullName: string;
	username: string;
	apiKey: string;
}

interface IPonds {
	_id: string;
	pondsName: string;
	userId: string;
	cityId: string;
}

interface IPools {
	_id: string;
	poolsName: string;
	userId: string;
	pondsId: string;
}

interface IProvince {
	_id: string;
	provinceName: string;
	latitude: string;
	longitude: string;
}

interface ICity {
	_id: string;
	cityName: string;
	latitude: string;
	longitude: string;
}

function PondsById() {
	const router = useRouter();
	const [pondData, setPondData] = useState<IPonds>();
	const [poolData, setPoolData] = useState<IPools[]>();
	const [cityData, setCityData] = useState<ICity>();
	const [provinceData, setProvinceData] = useState<IProvince>();

	const getPageData = (pondsId: string) => {
		if (!pondsId) return;
		Ponds.getPondById({
			isNotify: true,
			pondsId,
		}).then((res) => {
			if (!res) return;
			setPondData(res?.data);

			const cityId = res?.data?.cityId;

			Cities.getCityById({ cityId, isNotify: false }).then((res) => {
				if (!res) return;
				setCityData(res?.data);

				Provinces.getProvinceById({
					isNotify: false,
					provinceId: res?.data?.provinceId,
				}).then((res) => {
					if (!res) return;
					setProvinceData(res?.data);
				});
			});

			Pools.getPoolsByPondId({
				isNotify: true,
				pondId: pondsId,
			}).then((res) => {
				if (!res) return;
				setPoolData(res.data);
			});
		});
	};

	useEffect(() => {
		getPageData(router?.query?.ponds_id as string);
	}, [router]);
	return (
		<div className="mt-8 lg:w-full lg:m-auto lg:mt-8 pb-16">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between w-full">
				<div className="flex flex-row items-center justify-between md:justify-start w-full gap-4">
					<Link href="/dashboard/ponds">
						<button className="text-2xl font-bold text-red-600">
							<ArrowLeftOutlined />
						</button>
					</Link>
					<div className="text-right md:text-left">
						<h2 className="text-xl font-semibold">
							{pondData?.pondsName}
						</h2>
						<h4 className="text-sm">{cityData?.cityName}</h4>
						<h4>{provinceData?.provinceName}</h4>
					</div>
				</div>
				<div className="">
					<AddNewPools
						listRefresher={() =>
							getPageData(router?.query?.ponds_id as string)
						}
						pondsId={router?.query?.ponds_id as string}
						pondsName={pondData?.pondsName as string}
					/>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-4">
				{poolData?.map((pool: IPools, i: number) => {
					return (
						<PoolCards
							pondsId={router?.query?.ponds_id as string}
							poolsName={pool.poolsName}
							_id={pool._id}
							listRefresher={() =>
								getPageData(router?.query?.ponds_id as string)
							}
							key={i}
						/>
					);
				})}
			</div>
			{!poolData?.length && (
				<CenterEmpty message="Tambak tidak ditemukan" />
			)}
		</div>
	);
}

export default PondsById;
