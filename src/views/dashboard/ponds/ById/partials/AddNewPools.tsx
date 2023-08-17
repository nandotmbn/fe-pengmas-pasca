import { Cities, Ponds, Pools } from "@/services";
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

interface IAddNewPools {
	pondsName: string;
	pondsId: string;
	listRefresher: Function;
}

function AddNewPools(props: IAddNewPools) {
	const [queryName, setQueryName] = useState<string>("");
	const [isModelOpen, setModalOpen] = useState<boolean>(false);

	const handleCreatePool = async () => [
		Pools.createPools({
			data: {
				pondsId: props.pondsId,
				poolsName: queryName,
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
				<p className="text-sm font-light">Tambah Kolam</p>
			</button>
			<Modal
				open={isModelOpen}
				title="Tambahkan Kolam Baru"
				footer={[
					<button
						className="px-2 py-2 rounded border-2 ml-2 bg-red-500 text-white w-24"
						key="ahh"
						onClick={() => setModalOpen(false)}
					>
						Batal
					</button>,
					<button
						onClick={handleCreatePool}
						className="px-2 py-2 rounded border-2 ml-2 bg-green-500 text-white w-24"
						key="ahh2"
					>
						Tambah
					</button>,
				]}
				onCancel={() => setModalOpen(false)}
			>
				<div className="mt-4">
					<h2 className="text-sm">Nama Tambak: </h2>
					<h2 className="text-xl">{props.pondsName}</h2>
				</div>
				<div className="mt-4">
					<label htmlFor="pond_name">Nama Kolam</label>
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

export default AddNewPools;
