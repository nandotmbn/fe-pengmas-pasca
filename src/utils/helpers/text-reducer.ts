const textReducer = (text: string = "", length: number) => {
	let arrayStr: string[] = [];
	text?.split("").forEach((txt, index) => {
		if (length >= index) arrayStr.push(txt);
	});
	return arrayStr.join("") + (text.split("").length > length ? "..." : "");
};

export default textReducer;