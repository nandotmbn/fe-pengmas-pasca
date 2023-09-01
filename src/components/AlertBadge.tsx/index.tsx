import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface AlertBadgeProps {
	value: number;
	lowerBound: number;
	upperBound: number;
}

const AlertBadge: React.FC<AlertBadgeProps> = ({ value, lowerBound, upperBound }) => {
	const isBelow = value < lowerBound;
	const isAbove = value > upperBound;
	const isNull = value === 0;

	if (isNull){
		return (
			<span>
				{value}
			</span>
		);
	}

	if (isBelow || isAbove) {
		const alertType = isBelow ? "error" : "warning";
		const alertMessage = isBelow ? "Below" : "Above";

		toast[alertType](`${alertMessage} ${value} for this parameter`, {
			position: "top-right",
			autoClose: 5000, // Set the duration for which the toast will be displayed
		});
	}

	return (
		<>
		</>
		// <span>
		// 	{value}
		// </span>
	);
};

export default AlertBadge;
