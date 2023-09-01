import React from "react";
import { Line } from "react-chartjs-2";
import AlertBadge from "../AlertBadge.tsx";

import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Register Chart JS components
ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

interface RecordChartProps {
	labels: string[];
	temp: number[];
	oxygen: number[];
	salinity: number[];
	pH: number[];
}

const RecordChart: React.FC<RecordChartProps> = ({
	labels,
	temp,
	oxygen,
	salinity,
	pH,
}) => {
	const options = {
		responsive: true,
		maintainAspectRatio: false,
		plugins: {
			legend: {
				position: "top" as const,
			},
			title: {
				display: true,
				text: "Pemantauan hari ini",
			},
		},
	};

	const data = {
		datasets: [
			{
				label: "Suhu",
				data: temp,
				backgroundColor: "rgba(255, 0, 0, 0.5)",
			},
			{
				label: "Oksigen",
				data: oxygen,
				backgroundColor: "rgba(0, 255, 0, 0.5)",
			},
			{
				label: "Salinitas",
				data: salinity,
				backgroundColor: "rgba(0, 0, 255, 0.5)",
			},
			{
				label: "pH",
				data: pH,
				backgroundColor: "rgba(255, 255, 0, 0.5)",
			},
		],
		labels: labels,
	};

	return (
		<div className="record-chart-container h-96">
			<Line className="max-h-fit" options={options} data={data} />
			<div className="alert-badges">
				<AlertBadge value={temp[temp.length - 1]} lowerBound={26} upperBound={32} />
				<AlertBadge value={oxygen[oxygen.length - 1]} lowerBound={4} upperBound={100} />
				<AlertBadge value={salinity[salinity.length - 1]} lowerBound={0} upperBound={32} />
				<AlertBadge value={pH[pH.length - 1]} lowerBound={7} upperBound={8} />
			</div>
		</div>
	);
};

export default RecordChart;
