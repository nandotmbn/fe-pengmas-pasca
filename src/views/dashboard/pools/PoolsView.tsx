/* eslint-disable react-hooks/exhaustive-deps */
import { Cities, Ponds, Pools, Provinces } from "@/services";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Switch } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import MonitoringPanel from "./partials/MonitoringPanel";
import SamplingPanel from "./partials/SamplingPanel";

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

function PoolsView() {
	const router = useRouter().query;
	const { ponds_id, pools_id } = router;

	const [pondData, setPondData] = useState<IPonds>();
	const [poolData, setPoolData] = useState<IPools>();
	const [cityData, setCityData] = useState<ICity>();
	const [provinceData, setProvinceData] = useState<IProvince>();

	const [isMonitoring, setMonitoring] = useState<boolean>(true);

	const getPageData = (pondsId: string) => {
		if (!pondsId) return;
		Ponds.getPondById({
			isNotify: false,
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

			Pools.getPoolsById({
				isNotify: false,
				poolsId: pools_id as string,
			}).then((res) => {
				if (!res) return;
				setPoolData(res.data);
			});
		});
	};

	useEffect(() => {
		getPageData(ponds_id as string);
	}, [router]);

	return (
		<div className="mt-8 lg:w-full lg:m-auto lg:mt-8 pb-16">
			<div className="flex flex-col md:flex-row items-start md:items-center gap-4 justify-between w-full">
				<div className="flex flex-row items-center justify-between md:justify-start w-full gap-4">
					<Link href={`/dashboard/ponds/${ponds_id}`}>
						<button className="text-2xl font-bold text-red-600">
							<ArrowLeftOutlined rev={undefined} />
						</button>
					</Link>
					<div className="text-right md:text-left">
						<h2 className="text-xl font-semibold">{poolData?.poolsName}</h2>
						<h2 className="text-base font-semibold">{pondData?.pondsName}</h2>
						<h4 className="text-sm">{cityData?.cityName}</h4>
						<h4>{provinceData?.provinceName}</h4>
					</div>
				</div>
			</div>
			<div className="custom-switch mt-6">
				<p>Pilih Mode</p>
				<Switch
					onChange={(checked) => setMonitoring(checked)}
					checkedChildren={
						<div className="w-44 font-bold text-white">
							<p>Monitoring</p>
						</div>
					}
					unCheckedChildren={
						<div className="w-44 font-bold text-white">
							<p>Sampling</p>
						</div>
					}
					defaultChecked
				/>
			</div>
			{isMonitoring ? <MonitoringPanel poolId={pools_id as string} /> : <SamplingPanel poolId={pools_id as string} />}
		</div>
	);
}

export default PoolsView;
