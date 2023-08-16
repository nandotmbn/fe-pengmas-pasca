import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	provinceId: string
}

async function getProvinceById(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/provinces/provinceId/" + user.provinceId,
	);
	return data;
}
export { getProvinceById };
