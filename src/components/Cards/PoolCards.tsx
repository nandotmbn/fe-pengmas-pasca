/* eslint-disable react-hooks/exhaustive-deps */
import {
	Cities,
	Monitoring,
	Ponds,
	Pools,
	Provinces,
	Sampling,
} from "@/services";
import capitalizeFirstLetter from "@/utils/helpers/capitalize";
import { Popconfirm, Skeleton } from "antd";
import Link from "next/link";
import React, { useEffect, useState } from "react";

interface IRecord {
	salinity: number;
	acidity: number;
	oxygen: number;
	temperature: number;
}

interface IPonds {
	_id: string;
	poolsName: string;
	listRefresher: Function;
}

function PoolCards(props: IPonds) {
	const [recentMonitoring, setRecentMonitoring] = useState<IRecord>({
		acidity: 0,
		oxygen: 0,
		salinity: 0,
		temperature: 0,
	});
	const [recentSampling, setRecentSampling] = useState<IRecord>({
		acidity: 0,
		oxygen: 0,
		salinity: 0,
		temperature: 0,
	});

	const handleDelete = async () => {
		return await Ponds.deletePondsById({
			isNotify: false,
			pondsId: props._id,
		}).then((res) => {
			if (!res) return;
			return props.listRefresher();
		});
	};

	const getMonitoring = async () => {
		Monitoring.getAllMonitoring({
			from: "",
			to: "",
			isNotify: false,
			limit: 1,
			page: 1,
			poolsId: props._id,
			newestTime: "true",
		}).then((res) => {
			if (!res) return;
			return setRecentMonitoring(res.data[0]);
		});
	};
	const getSampling = async () => {
		Sampling.getAllSampling({
			from: "",
			to: "",
			isNotify: false,
			limit: 1,
			page: 1,
			poolsId: props._id,
			newestTime: "true",
		}).then((res) => {
			if (!res) return;
			return setRecentSampling(res.data[0]);
		});
	};

	useEffect(() => {
		getMonitoring();
		getSampling();
	}, []);

	return (
		<div className="bg-blue-700 rounded-xl border-blue-200 border-2 p-4 text-white">
			<h4 className="text-xl font-white">{props.poolsName}</h4>
			<div className="flex flex-row mt-2 mb-4">
				<div className="flex-1 flex-col justify-between flex border-r-2 pr-2">
					<h5 className="text-xs">Pemantauan Terakhir</h5>
					<ul>
						<li className="flex flex-row justify-between">
							<p>pH :</p> {recentMonitoring?.acidity}
						</li>
						<li className="flex flex-row justify-between">
							<p>O2 :</p> {recentMonitoring?.oxygen}
						</li>
						<li className="flex flex-row justify-between">
							<p>Salinitas :</p> {recentMonitoring?.salinity}
						</li>
						<li className="flex flex-row justify-between">
							<p>Suhu :</p> {recentMonitoring?.temperature}
						</li>
					</ul>
				</div>
				<div className="flex-1 flex-col justify-between flex border-l-2 pl-2">
					<h5 className="text-xs">Sampel Terakhir</h5>
					<ul>
						<li className="flex flex-row justify-between">
							<p>pH :</p> {recentSampling?.acidity}
						</li>
						<li className="flex flex-row justify-between">
							<p>O2 :</p> {recentSampling?.oxygen}
						</li>
						<li className="flex flex-row justify-between">
							<p>Salinitas :</p> {recentSampling?.salinity}
						</li>
						<li className="flex flex-row justify-between">
							<p>Suhu :</p> {recentSampling?.temperature}
						</li>
					</ul>
				</div>
			</div>
			<div className="flex flex-row gap-4 w-full">
				<Link className="flex-1" href={"/dashboard/ponds/" + props._id}>
					<button className="w-full py-2 bg-blue-600 text-white rounded-xl border-2 border-white">
						Buka
					</button>
				</Link>
				<Popconfirm
					title="Hapus kolam?"
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

export default PoolCards;
