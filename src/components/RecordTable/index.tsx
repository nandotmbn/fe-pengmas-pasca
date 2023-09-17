import { Space, Table } from "antd";
import type { ColumnsType } from "antd/es/table";

interface RecordType {
	_id: string;
	poolsId: string;
	temperature: number;
	acidity: number;
	oxygen: number;
	salinity: number;
	isArchived: boolean;
	createdAt: string;
	updatedAt?: string;
}

const lowerTemperatureLimit = 20;
const upperTemperatureLimit = 30;
const lowerOxygenLimit = 5;
const upperOxygenLimit = 10;
const lowerSalinityLimit = 25;
const upperSalinityLimit = 35;
const lowerPHLimit = 6;
const upperPHLimit = 8; 

const columns: ColumnsType<RecordType> = [
	{
		title: "Tanggal",
		dataIndex: "createdAt",
		key: "createdAt",
		fixed: "left",
		render: (createdAt: any) => (
			<Space>
				{new Date(createdAt.split("T")[0]).toLocaleDateString("id-ID", {
					day: "numeric",
					month: "long",
					year: "numeric",
				})}
			</Space>
		),
	},
	{
		title: "Waktu",
		dataIndex: "createdAt",
		key: "createdAt",
		render: (createdAt: any) => (
			<Space>{new Date(createdAt).toLocaleTimeString("id-ID")}</Space>
		),
	},
	{
		title: "Suhu",
		dataIndex: "temperature",
		key: "temperature",
		sorter: (a: any, b: any) => a.temperature - b.temperature,
		render: (temperature: number) => {
			const isBelowLimit = temperature < lowerTemperatureLimit;
			const isAboveLimit = temperature > upperTemperatureLimit;

			let colorClass = "";
			if (isBelowLimit) colorClass = "text-blue-500";
			else if (isAboveLimit) colorClass = "text-red-500";

			return (
				<Space className={`text-center ${colorClass}`}>
					{temperature.toFixed(1)}°C
				</Space>
			);
		},
	},
	{
		title: "Oksigen",
		dataIndex: "oxygen",
		key: "oxygen",
		sorter: (a: any, b: any) => a.oxygen - b.oxygen,
		render: (oxygen: number) => {
			const isBelowLimit = oxygen < lowerOxygenLimit;
			const isAboveLimit = oxygen > upperOxygenLimit;

			let colorClass = "";
			if (isBelowLimit) colorClass = "text-blue-500";
			else if (isAboveLimit) colorClass = "text-red-500";

			return <Space className={`text-center ${colorClass}`}>{oxygen}%</Space>;
		},
	},
	{
		title: "Salinitas",
		dataIndex: "salinity",
		key: "salinity",
		sorter: (a: any, b: any) => a.salinity - b.salinity,
		render: (salinity: number) => {
			const isBelowLimit = salinity < lowerSalinityLimit;
			const isAboveLimit = salinity > upperSalinityLimit;

			let colorClass = "";
			if (isBelowLimit) colorClass = "text-blue-500";
			else if (isAboveLimit) colorClass = "text-red-500";

			return <Space className={`text-center ${colorClass}`}>{salinity}%</Space>;
		},
	},
	{
		title: "pH",
		dataIndex: "acidity",
		key: "acidity",
		sorter: (a: any, b: any) => a.acidity - b.acidity,
		render: (acidity: number) => {
			const isBelowLimit = acidity < lowerPHLimit;
			const isAboveLimit = acidity > upperPHLimit;

			let colorClass = "";
			if (isBelowLimit) colorClass = "text-blue-500";
			else if (isAboveLimit) colorClass = "text-red-500";

			return (
				<Space className={`text-center ${colorClass}`}>
					{acidity.toFixed(2)}
				</Space>
			);
		},
	},
];

interface IRecordTableProps {
	records: RecordType[];
}

function RecordTable({ records }: IRecordTableProps) {
	return (
		<Table
			rowClassName="text-sm md:text-base"
			className="whitespace-nowrap"
			columns={columns}
			dataSource={records}
			rowKey="_id"
		/>
	);
}

export default RecordTable;
