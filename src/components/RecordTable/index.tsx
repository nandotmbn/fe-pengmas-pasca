import { Switch, DatePicker, Space, Table, Tag } from "antd";
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

const columns: ColumnsType<RecordType> = [
	{
		title: "Tanggal",
		dataIndex: "createdAt",
		key: "createdAt",
		fixed: "left",
		render: (createdAt: any) => (
			<Space>
				{/* get date only like Senin, 17 Agustus 2023 */}
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
		render: (a: any) => (
			<Space className="text-center">{a.toFixed(1)}°C</Space>
		),
	},
	{
		title: "Oksigen",
		dataIndex: "oxygen",
		key: "oxygen",
		sorter: (a: any, b: any) => a.oxygen - b.oxygen,
		render: (a: any) => <Space className="text-center">{a}%</Space>,
	},
	{
		title: "Salinitas",
		dataIndex: "salinity",
		key: "salinity",
		sorter: (a: any, b: any) => a.salinity - b.salinity,
		render: (a: any) => <Space className="text-center">{a}%</Space>,
	},
	{
		title: "pH",
		dataIndex: "acidity",
		key: "acidity",
		sorter: (a: any, b: any) => a.acidity - b.acidity,
		render: (a: any) => (
			<Space className="text-center">
				{a < 7 ? (
					<Space className="text-red-500 font-semibold">{a}</Space>
				) : (
					<Space className="text-green-500 font-semibold">{a}</Space>
				)}
			</Space>
		),
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
