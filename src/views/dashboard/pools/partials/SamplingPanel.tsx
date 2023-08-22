/* eslint-disable react-hooks/exhaustive-deps */
import { DatePicker, Switch, Button } from "antd";
import React, { useEffect, useState } from "react";

import { Sampling } from "@/services";
import RecordTable from "@/components/RecordTable";
import socketIOClient from "socket.io-client";
import { useRouter } from 'next/router';

import RecordChart from "@/components/RecordChart";

interface ISamplingPanel {
	poolId: string;
}

function SamplingPanel(props: ISamplingPanel) {
	const [startDate, setStartDate] = useState<string>("");
	const [endDate, setEndDate] = useState<string>("");
	const [records, setRecords] = useState([]);
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

			setRecords(res.data);
			return res.data.map((datum: any, i: number) => {
				const time =
					Math.round(
						new Date(datum.updatedAt).getTime() / (1000 * 60 * 60)
					) *
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


		const startOfDay = new Date(new Date(date).toLocaleString()).getTime();

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
					plottedDate.push(
						new Date(mon.createdAt).toLocaleTimeString()
					);
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
		setOxygen(plottedOxy);
		setSalinity(plottedSal);
		setTemp(plottedTemp);
		setpH(plottedPH);
	};

	const getSamplingByDate = async () => {
		const samplingDataAtSelectedDate = await Sampling.getAllSampling({
			isNotify: false,
			poolsId: props.poolId,
			from: startDate,
			to:
				endDate ||
				new Date(new Date(startDate).getTime() + 86400000)
					.toISOString()
					.split("T")[0],
			limit: 9999,
			page: 1,
			newestTime: "true",
		}).then((res) => {
			if (!res) return [];

			setRecords(res.data);
			return res.data.map((datum: any, i: number) => {
				const time =
					Math.round(
						new Date(datum.updatedAt).getTime() / (1000 * 60 * 60)
					) *
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

		const plottedDate: any = [];
		const plottedTemp: any = [];
		const plottedOxy: any = [];
		const plottedSal: any = [];
		const plottedPH: any = [];

		let lastTemp: any = 0;
		let lastOxy: any = 0;
		let lastSal: any = 0;
		let lastPH: any = 0;

		samplingDataAtSelectedDate?.forEach((mon: any, ine: number) => {
			plottedDate.push(new Date(mon.createdAt).toLocaleTimeString());
			plottedOxy.push(mon.oxygen);
			plottedSal.push(mon.salinity);
			plottedPH.push(mon.acidity);
			plottedTemp.push(mon.temperature);
			lastOxy = mon.oxygen;
			lastSal = mon.salinity;
			lastPH = mon.acidity;
			lastTemp = mon.temperature;
		});

		setLabels(plottedDate);
		setOxygen(plottedOxy);
		setSalinity(plottedSal);
		setTemp(plottedTemp);
		setpH(plottedPH);
	};

	const socketInit = () => {
		const socket = socketIOClient("wss://dev-api-2023.aquaculturepens.com");
		socket.on("Sample:" + props.poolId, async (data) => {
			console.log(data);
			getTodayMonitoring();
		});
	};

	function generateCSVData(records: Record[]): string {
		let csvData = "Waktu,Suhu,Oksigen,Salinitas,pH\n"; // Header kolom

		for (const record of records) {
		  const rowData = [
			new Date(record.createdAt).toLocaleTimeString(),
			record.temperature.toString(),
			record.oxygen.toString(),
			record.salinity.toString(),
			record.acidity.toString(),
		  ];
		  csvData += rowData + "\n";
		}

		return csvData;
	  }

	  function downloadCSV(data: string, filename: string) {
		const blob = new Blob([data], { type: 'text/csv;charset=utf-8' });
		const url = URL.createObjectURL(blob);
		const link = document.createElement('a');
		link.href = url;
		link.setAttribute('download', filename);
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	  }

	  function handleDownloadClick() {
		const csvData = generateCSVData(records);
		const filename = "data_monitoring.csv";
		downloadCSV(csvData, filename);
	  }


	useEffect(() => {

		setRecords([]);
		if (startDate || endDate) {
			getSamplingByDate();
		} else {
			getTodayMonitoring();
			socketInit();
		}
	}, [startDate, endDate]);

	return (
		<div className="mt-8 w-full">
			<Button
						className="bg-green-500 hover:bg-green-400 text-white px-4 rounded-lg"
						onClick={handleDownloadClick}
					>
						Unduh CSV
					</Button>
			<div className="space-y-2 md:space-x-4 mb-4">
				<DatePicker
					onChange={(date, dateString) => {
						setStartDate(dateString);
					}}
					placeholder="Tanggal Awal"
					allowClear
				/>
				<span>-</span>
				<DatePicker
					onChange={(date, dateString) => {
						setEndDate(dateString);
					}}
					placeholder="Tanggal Akhir"
					disabled={!startDate}
					allowClear
				/>
			</div>
			<RecordChart
				labels={labels}
				temp={temp}
				oxygen={oxygen}
				salinity={salinity}
				pH={pH}
			/>
			<div className="mt-4 overflow-scroll">
				<RecordTable records={records} />
			</div>
		</div>
	);
}

export default SamplingPanel;
