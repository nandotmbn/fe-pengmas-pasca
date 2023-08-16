import { urlEndpoint } from "@/constants";
import cookiesHandler from "@/utils/storage/cookies";
import { message } from "antd";
import axios from "axios";
const serviceInstanceNoAuth = axios.create({
	baseURL: urlEndpoint,
	timeout: 10000,
});

const serviceInstance = (isNotify: boolean, headless: boolean = false) => {
	const accessToken = headless ? "" : cookiesHandler.getCookie("access_token");

	const _serviceInstance = axios.create({
		baseURL: urlEndpoint,
		timeout: 10000,
		headers: {
			Authorization: "Bearer " + accessToken,
			"Access-Control-Allow-Origin": "*",
		},
	});

	_serviceInstance.interceptors.response.use(
		function (response): any {
			if (isNotify) message.success({ content: response.data.message });
			return response;
		},
		function (error) {
			if (isNotify) message.error({ content: error.response.data.message });
			return error;
		}
	);

	return _serviceInstance;
};

export { serviceInstanceNoAuth, serviceInstance };
export { Auth } from "./auth";
export { Users } from "./users";
export { Ponds } from "./ponds";
export { Provinces } from "./provinces";
export { Cities } from "./cities";
export { Pools } from "./pools";
