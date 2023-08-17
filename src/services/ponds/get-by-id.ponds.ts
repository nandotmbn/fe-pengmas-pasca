import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	pondsId: string
}

async function getPondById(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/ponds/pondsId/" + user.pondsId,
	);
	return data;
}
export { getPondById };
