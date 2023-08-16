import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	provinceId: string
}

async function getAllCitiesByProvinceId(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/cities/provinceId/" + user.provinceId,
	);
	return data;
}
export { getAllCitiesByProvinceId };
