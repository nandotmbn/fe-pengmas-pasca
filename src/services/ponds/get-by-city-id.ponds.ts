import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	cityId: string
}

async function getAllPondsByCityId(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/ponds/cityId/" + user.cityId,
	);
	return data;
}
export { getAllPondsByCityId };
