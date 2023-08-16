import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	provinceName: string
}

async function getAllProvinces(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/provinces?provinceName=" + user.provinceName,
	);
	return data;
}
export { getAllProvinces };
