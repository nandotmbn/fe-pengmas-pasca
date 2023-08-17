import PondCards from "@/components/Cards/PondCards";
import CenterEmpty from "@/components/Empty/CenterEmpty";
import { Cities, Ponds, Provinces, Users } from "@/services";
import {
	CloseCircleFilled,
	CopyOutlined,
	SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, message, Modal, Select } from "antd";
import React, { useEffect, useState } from "react";
import AddNewPonds from "./partials/AddNewPonds";

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

function DashboardPonds() {
	const [pondsData, setPondsData] = useState<IPonds[]>();
	const [provincesData, setProvincesData] = useState<IProvince[]>();
	const [citiesData, setCitiesData] = useState<ICity[]>();
	const [selectedProv, setSelectedProv] = useState<string>("");
	const [selectedCity, setSelectedCity] = useState<string>("");
	const [queryName, setQueryName] = useState<string>("");

	const handleChangeProv = (value: string) => {
		setSelectedProv(value);

		findPonds(queryName, "", value);
		Cities.getAllCitiesByProvinceId({
			isNotify: false,
			provinceId: value,
		}).then((res: any) => {
			if (!res) return setCitiesData([]);
			setCitiesData(res.data);
		});
	};

	const handleChangeCity = (value: string, label: any) => {
		setSelectedCity(value);
		findPonds(queryName, value, "");
	};

	const findPonds = async (
		pondName: string,
		cityId: string,
		provinceId: string
	) => {
		Ponds.getAllPonds({
			isNotify: false,
			pondsName: pondName,
			limit: 9999,
			page: 1,
			cityId,
			provinceId,
		}).then((res: any) => {
			if (!res) return setPondsData([]);
			setPondsData(res.data);
		});
	};

	const findProvince = async (provName: string) => {
		Provinces.getAllProvinces({ isNotify: false, provinceName: provName }).then(
			(res: any) => {
				if (!res) return setProvincesData([]);
				setProvincesData(res.data);
			}
		);
	};

	useEffect(() => {
		findPonds("", "", "");
		findProvince("");
	}, []);

	return (
		<div className="mt-8 px-2 lg:w-full lg:m-auto lg:mt-8 pb-16">
			<div className="w-full mt-16 flex flex-row justify-between items-center">
				<h2 className="text-2xl font-semibold">Daftar Tambak</h2>
				<AddNewPonds
					listRefresher={() => findPonds(queryName, selectedCity, selectedProv)}
					provincesData={provincesData as IProvince[]}
				/>
			</div>
			<div className="mt-4">
				<p>Cari Tambak</p>
				<div className="flex flex-row">
					<Input
						onChange={(txt) => {
							setQueryName(txt.target.value);
							findPonds(txt.target.value, "", selectedProv);
						}}
						className="flex-5"
						placeholder="Cari nama tambak anda..."
					/>
				</div>
			</div>
			<div className="mb-4">
				<div className="flex flex-col">
					<div className="flex flex-row gap-2 items-center">
						<label className="text-sm" htmlFor="prov_list">
							Pilih Propinsi
						</label>
						<Select
							value={selectedProv}
							defaultValue="Pilih Provinsi"
							style={{ width: 200 }}
							onChange={handleChangeProv}
							options={provincesData?.map((prov: IProvince) => {
								return { value: prov._id, label: prov.provinceName };
							})}
						/>
						<button
							onClick={() => {
								setSelectedProv("");
								findPonds(queryName, selectedCity, "");
							}}
							className="text-xl"
						>
							<CloseCircleFilled className="text-white bg-red-500 hover:text-red-500 hover:bg-white rounded-full" />
						</button>
					</div>
					{selectedProv && (
						<div className="flex flex-row gap-2 items-center">
							<label className="text-sm" htmlFor="prov_list">
								Pilih Propinsi
							</label>
							<Select
								value={selectedCity}
								defaultValue="Pilih Kota"
								style={{ width: 200 }}
								onChange={handleChangeCity}
								options={citiesData?.map((prov: ICity) => {
									return { value: prov._id, label: prov.cityName };
								})}
							/>
							<button onClick={() => setSelectedCity("")} className="text-xl">
								<CloseCircleFilled className="text-white bg-red-500 hover:text-red-500 hover:bg-white rounded-full" />
							</button>
						</div>
					)}
				</div>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{pondsData?.map((pond: IPonds, i: number) => {
					return (
						<PondCards
							listRefresher={() =>
								findPonds(queryName, selectedCity, selectedProv)
							}
							{...pond}
							key={i}
						/>
					);
				})}
			</div>
			{!pondsData?.length && <CenterEmpty message="Tambak tidak ditemukan" />}
		</div>
	);
}

export default DashboardPonds;
