import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	cityId: string
}

async function getCityById(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/cities/cityId/" + user.cityId,
	);
	return data;
}
export { getCityById };
