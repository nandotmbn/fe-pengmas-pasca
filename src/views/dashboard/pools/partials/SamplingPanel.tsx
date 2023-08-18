/* eslint-disable react-hooks/exhaustive-deps */
import { Switch } from "antd";
import React, { useEffect, useState } from "react";

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
import { Line } from "react-chartjs-2";
import { Monitoring, Sampling } from "@/services";
import socketIOClient from "socket.io-client";
import { useRouter } from "next/router";


ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const options = {
	responsive: true,
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
interface ISamplingPanel {
	poolId: string;
}

function SamplingPanel(props: ISamplingPanel) {
	const [labels, setLabels] = useState([]);
	const [oxygen, setOxygen] = useState([]);
	const [salinity, setSalinity] = useState([]);
	const [pH, setpH] = useState([]);
	const [temp, setTemp] = useState([]);
	const router = useRouter()

	const getTodayMonitoring = async () => {
		const allMonitoring = await Sampling.getTodaySampling({
			isNotify: false,
			poolsId: props.poolId,
		}).then((res) => {
			if (!res) return;
			return res.data.map((datum: any, i: number) => {
				const time =
					Math.round(new Date(datum.updatedAt).getTime() / (1000 * 60 * 60)) * 60 * 60;
				const d = new Date(0);
				d.setUTCSeconds(time);
				return {
					time: d,
					...datum,
				};
			});
		});

		const thisDate = new Date(Date.now())

		const date = (`${thisDate.getFullYear()}-${thisDate.getMonth() + 1}-${thisDate.getDate()}`)

		const startOfDay = new Date(new Date(date)).getTime();

		const recentTime = new Date(Date.now()).getTime();

		const plottedDate: any = [];
		const plottedTemp: any = [];
		const plottedOxy: any = [];
		const plottedSal: any = [];
		const plottedPH: any = [];

		let lastTemp: any = 0;
		let lastOxy: any = 0;
		let lastSal: any = 0;
		let lastPH: any = 0;

		for (let time = startOfDay; time < recentTime; time += 3600000) {
			const d = new Date(0);
			d.setUTCMilliseconds(time);

			allMonitoring?.forEach((mon: any, ine: number) => {
				if (mon.time.toString() === d.toString()) {
					plottedDate.push(new Date(mon.createdAt).toLocaleTimeString());
					plottedOxy.push(mon.oxygen);
					plottedSal.push(mon.salinity);
					plottedPH.push(mon.acidity);
					plottedTemp.push(mon.temperature);
					lastOxy = mon.oxygen;
					lastSal = mon.salinity;
					lastPH = mon.acidity;
					lastTemp = mon.temperature;
					return;
				}
			});
			plottedDate.push("");
			plottedOxy.push(lastOxy);
			plottedSal.push(lastSal);
			plottedPH.push(lastPH);
			plottedTemp.push(lastTemp);
		}

		setLabels(plottedDate);
		setOxygen(plottedOxy)
		setSalinity(plottedSal)
		setTemp(plottedTemp)
		setpH(plottedPH);
	};

	const socketInit = () => {
		const socket = socketIOClient("wss://dev-api-2023.aquaculturepens.com");
		socket.on("Sample:" + props.poolId, async (data) => {
			console.log(data)
			getTodayMonitoring();
		});
	};

	useEffect(() => {
		getTodayMonitoring();
	}, [router]);
	
	useEffect(() => {
		socketInit()
	}, []);

	return (
		<div className="mt-8 w-full">
			<Line
				options={options}
				data={{
					datasets:  [
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
				}}
			/>
		</div>
	);
}

export default SamplingPanel;
