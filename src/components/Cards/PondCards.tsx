/* eslint-disable react-hooks/exhaustive-deps */
import { Cities, Ponds, Pools, Provinces } from "@/services";
import capitalizeFirstLetter from "@/utils/helpers/capitalize";
import { Popconfirm, Skeleton } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IPonds {
	_id: string;
	pondsName: string;
	userId: string;
	cityId: string;
	listRefresher: Function

}

interface ICity {
	_id: string;
	cityName: string;
	provinceId: string;
	latitude: string;
	longitude: string;
}

interface IProvince {
	_id: string;
	provinceName: string;
	latitude: string;
	longitude: string;
}

function PondCards(props: IPonds) {
	const [city, setCity] = useState<ICity>();
	const [province, setProvince] = useState<IProvince>();
	const [numberOfPools, setNumberOfPools] = useState<number>(0);

	const getLocation = async () => {
		Cities.getCityById({ cityId: props.cityId, isNotify: false }).then(
			(res: any) => {
				if (!res) return;
				setCity(res.data);
				Provinces.getProvinceById({
					provinceId: res.data.provinceId,
					isNotify: false,
				}).then((res2) => {
					if (!res2) return;
					setProvince(res2.data);
				});
			}
		);
	};

	const getPools = async () => {
		Pools.getPoolsByPondId({ isNotify: false, pondId: props._id }).then(
			(res) => {
				if (!res) return;
				setNumberOfPools(res.data.length);
			}
		);
	};
	
	const handleDelete = async () => {
		return await Ponds.deletePondsById({ isNotify: false, pondsId: props._id }).then(
			(res) => {
				if (!res) return;
				return props.listRefresher()
			}
		);
	};

	useEffect(() => {
		getLocation();
		getPools();
	}, [props]);

	return (
		<div className="bg-blue-700 rounded-xl border-blue-200 border-2 p-4 text-white">
			<h4 className="text-xl font-white">{props.pondsName}</h4>
			<div className="flex flex-row gap-2 mt-2">
				<div className="flex-1">
					{city?.cityName ? (
						<p className="text-xs font-semibold">
							{capitalizeFirstLetter(
								(city?.cityName.toLowerCase() as string) || ""
							)}
						</p>
					) : (
						<Skeleton.Button
							active={true}
							size="small"
							shape="default"
							block={false}
						/>
					)}

					{province?.provinceName ? (
						<p className="text-xs font-light">
							{capitalizeFirstLetter(
								(province?.provinceName.toLowerCase() as string) || ""
							)}
						</p>
					) : (
						<Skeleton.Button
							active={true}
							size="small"
							shape="default"
							block={false}
						/>
					)}
				</div>
				<div className="flex-1">
					<p>Jumlah Kolam</p>
					<p className="text-4xl font-bold">{numberOfPools}</p>
				</div>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<Link className="flex-1" href={"/dashboard/ponds/" + props._id}>
					<button className="w-full py-2 bg-blue-600 text-white rounded-xl border-2 border-white">
						Buka
					</button>
				</Link>
				<Popconfirm
					title="Hapus tambak?"
					description="Apakah anda yakin untuk menghapus tambak ini?"
					onConfirm={handleDelete}
					okText="Iya"
					cancelText="Tidak"
					okButtonProps={{ loading: false }}
				>
					<button className="w-full flex-1 py-2 bg-red-600 text-white rounded-xl border-2 border-white">
						Hapus
					</button>
				</Popconfirm>{" "}
			</div>
		</div>
	);
}

export default PondCards;
