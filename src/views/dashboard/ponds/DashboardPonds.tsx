import PondCards from "@/components/Cards/PondCards";
import { Ponds, Users } from "@/services";
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

function DashboardPonds() {
	const [pondsData, setPondsData] = useState<IPonds[]>();

	const findPonds = async (pondName: string) => {
		Ponds.getAllPonds({ isNotify: false, pondsName: pondName }).then(
			(res: any) => {
				if (!res) return setPondsData([]);
				setPondsData(res.data);
			}
		);
	};

	useEffect(() => {
		findPonds("");
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
					defaultValue="lucy"
					style={{ width: 120 }}
					// onChange={handleChange}
					options={[
						{ value: "jack", label: "Jack" },
						{ value: "lucy", label: "Lucy" },
						{ value: "Yiminghe", label: "yiminghe" },
						{ value: "disabled", label: "Disabled", disabled: true },
					]}
				/>
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
