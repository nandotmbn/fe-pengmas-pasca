const capitalizeFirstLetter = (string: string) => {
	let builtString = "";
	string.split(" ").forEach((text) => {
		builtString += text[0]?.toUpperCase() + text.slice(1) + " ";
	});
	return builtString;
}

export default capitalizeFirstLetter