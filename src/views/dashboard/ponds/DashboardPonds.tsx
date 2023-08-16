import PondCards from "@/components/Cards/PondCards";
import { Cities, Ponds, Provinces, Users } from "@/services";
import { CopyOutlined, SearchOutlined } from "@ant-design/icons";
import { Input, message, Select } from "antd";
import React, { useEffect, useState } from "react";

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
	const [selectedProv, setSelectedProv] = useState<String>("");
	const [selectedCity, setSelectedCity] = useState<String>("");

	const handleChangeProv = (value: string) => {
		setSelectedProv(value);

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
		Ponds.getAllPondsByCityId({ cityId: value, isNotify: true }).then(
			(res: any) => {
				if (!res) return setPondsData([]);
				setPondsData(res.data);
			}
		);
	};

	const findPonds = async (pondName: string) => {
		Ponds.getAllPonds({ isNotify: false, pondsName: pondName }).then(
			(res: any) => {
				if (!res) return setPondsData([]);
				setPondsData(res.data);
			}
		);
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
		findPonds("");
		findProvince("");
	}, []);

	return (
		<div className="mt-8 px-2 lg:w-8/12 lg:m-auto lg:mt-8">
			<h2 className="text-2xl font-semibold mt-8">Daftar Tambak</h2>
			<div className="mt-4">
				<p>Cari Tambak</p>
				<div className="flex flex-row">
					<Input
						onChange={(txt) => findPonds(txt.target.value)}
						className="flex-5"
						placeholder="Cari nama tambak anda..."
					/>
				</div>
			</div>
			<div className="mb-4">
				<Select
					defaultValue="Pilih Provinsi"
					style={{ width: 200 }}
					onChange={handleChangeProv}
					options={provincesData?.map((prov: IProvince) => {
						return { value: prov._id, label: prov.provinceName };
					})}
				/>
				{selectedProv && (
					<Select
						defaultValue="Pilih Kota"
						style={{ width: 200 }}
						onChange={handleChangeCity}
						options={citiesData?.map((prov: ICity) => {
							return { value: prov._id, label: prov.cityName };
						})}
					/>
				)}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-2">
				{pondsData?.map((pond: IPonds, i: number) => {
					return <PondCards {...pond} key={i} />;
				})}
			</div>
		</div>
	);
}

export default DashboardPonds;
