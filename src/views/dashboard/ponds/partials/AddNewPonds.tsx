import { Cities, Ponds } from "@/services";
import { Button, Input, Modal, Select } from "antd";
import React, { useState } from "react";

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

interface IAddNewPonds {
	provincesData: IProvince[];
	listRefresher: Function;
}

function AddNewPonds(props: IAddNewPonds) {
	const [selectedProv, setSelectedProv] = useState<string>("");
	const [selectedCity, setSelectedCity] = useState<string>("");
	const [citiesData, setCitiesData] = useState<ICity[]>();
	const [queryName, setQueryName] = useState<string>("");
	const [isModelOpen, setModalOpen] = useState<boolean>(false);

	const handleChangeProv = (value: string) => {
		setSelectedProv(value);
		setSelectedCity("");

		Cities.getAllCitiesByProvinceId({
			isNotify: false,
			provinceId: value,
		}).then((res: any) => {
			if (!res) return setCitiesData([]);
			setCitiesData(res.data);
		});
	};

	const handleChangeCity = (value: string, label: any) => {
		console.log(value);
		setSelectedCity(value);
	};

	const handleCreatePond = async () => [
		Ponds.createPonds({
			data: {
				cityId: selectedCity,
				pondsName: queryName,
			},
			isNotify: true,
		})
			.then((res) => {
				if (!res) return setModalOpen(false);
			})
			.finally(() => {
				setModalOpen(false);
			}),
	];

	return (
		<>
			<button
				onClick={() => setModalOpen(true)}
				className="px-4 py-2 rounded bg-green-500 text-white hover:text-green-500 hover:bg-white border-2 border-green-500"
			>
				<p className="text-sm font-light">Tambah Tambak</p>
			</button>
			<Modal
				open={isModelOpen}
				title="Tambahkan Tambak Baru"
				footer={[
					<button
						className="px-2 py-2 rounded border-2 ml-2 bg-red-500 text-white w-24"
						key="ahh"
						onClick={() => setModalOpen(false)}
					>
						Batal
					</button>,
					<button
						onClick={handleCreatePond}
						className="px-2 py-2 rounded border-2 ml-2 bg-green-500 text-white w-24"
						key="ahh2"
					>
						Tambah
					</button>,
				]}
				onCancel={() => setModalOpen(false)}
			>
				<div className="mb-4">
					<div  className="mb-4">
						<label className="mr-4" htmlFor="prov_list">Pilih Provinsi</label>

						<Select
							defaultValue="Pilih Provinsi"
							style={{ width: 200 }}
							onChange={handleChangeProv}
							options={props.provincesData?.map((prov: IProvince) => {
								return { value: prov._id, label: prov.provinceName };
							})}
						/>
					</div>
					{selectedProv && (
						<div>
							<label className="mr-4" htmlFor="city_list">Pilih Kota</label>
							<Select
								defaultValue="Pilih Kota"
								value={selectedCity}
								style={{ width: 200 }}
								onChange={handleChangeCity}
								options={citiesData?.map((prov: ICity) => {
									return { value: prov._id, label: prov.cityName };
								})}
							/>
						</div>
					)}
				</div>
				<div className="mt-4">
					<label htmlFor="pond_name">Nama Tambak</label>
					<Input
						id="pond_name"
						name="pond_name"
						onChange={(text) => setQueryName(text.target.value)}
					/>
				</div>
			</Modal>
		</>
	);
}

export default AddNewPonds;
