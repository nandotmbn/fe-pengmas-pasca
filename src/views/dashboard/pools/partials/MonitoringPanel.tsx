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
import { Monitoring } from "@/services";
import socketIOClient from "socket.io-client";
import moment from "moment";

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

export const data = {
	datasets: [
		{
			label: "Suhu",
			data: [1, 2, 3, 4, 5, 6, 7, 7],
			borderColor: "rgb(255, 99, 132)",
			backgroundColor: "rgba(255, 99, 132, 0.5)",
		},
		{
			label: "Oksigen",
			data: [1, 2, 3, 4, 5, 6, 7, 7],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "Salinitas",
			data: [1, 2, 3, 4, 5, 6, 7, 7],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
		{
			label: "pH",
			data: [1, 2, 3, 4, 5, 6, 7, 7],
			borderColor: "rgb(53, 162, 235)",
			backgroundColor: "rgba(53, 162, 235, 0.5)",
		},
	],
};

interface IMonitoringPanel {
	poolId: string;
}

function MonitoringPanel(props: IMonitoringPanel) {
	const [labels, setLabels] = useState([1, 2, 3, 4, 5]);
	const [oxygen, setOxygen] = useState([1, 2, 3, 4, 5]);
	const [salinity, setSalinity] = useState([1, 2, 3, 4, 5]);
	const [pH, setpH] = useState([1, 2, 3, 4, 5]);
	const [temp, setTemp] = useState([1, 2, 3, 4, 5]);

	const getTodayMonitoring = async () => {
		const allMonitoring = await Monitoring.getTodayMonitoring({
			isNotify: false,
			poolsId: props.poolId,
		}).then((res) => {
			if (!res) return;
			return res.data.map((datum: any, i: number) => {
				const time =
					Math.round(new Date(datum.updatedAt).getTime() / (1000 * 60 * 60)) *
					60 *
					60;
				const d = new Date(0);
				d.setUTCSeconds(time);
				return {
					time: d,
					...datum,
				};
			});
		});

		const thisDate = new Date(Date.now());

		const date = `${thisDate.getFullYear()}-${
			thisDate.getMonth() + 1
		}-${thisDate.getDate()}`;

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

		setOxygen(plottedOxy);
		setSalinity(plottedSal);
		setTemp(plottedTemp);
		setpH(plottedPH);
		setLabels(plottedDate);

		// alert(plottedPH[23])
	};

	const socketInit = () => {
		const socket = socketIOClient("wss://dev-api-2023.aquaculturepens.com");
		socket.on("Monitor:" + props.poolId, async (data) => {
			// getTodayMonitoring();
		});
	};

	useEffect(() => {
		getTodayMonitoring();
		socketInit();
	}, []);

	return (
		<div className="mt-8 w-full">
			<Line
				options={{
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
				}}
				data={{
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
				}}
			/>
		</div>
	);
}

export default MonitoringPanel;
