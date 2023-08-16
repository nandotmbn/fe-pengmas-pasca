const storageHandler = {
	setValue: (name: string, value: string) => {
		window.localStorage.setItem(name, value);
		window.sessionStorage.setItem(name, value);
	},

	getValue: (name: string) => {
		return (
			window.sessionStorage.getItem(name) || window.localStorage.getItem(name)
		);
	},

	removeValue: (name: string) => {
		window.localStorage.removeItem(name);
		window.sessionStorage.removeItem(name);
	},
};

export default storageHandler;
