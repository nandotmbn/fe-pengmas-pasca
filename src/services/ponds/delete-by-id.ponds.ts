import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	pondsId: string
}

async function deletePondsById(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).delete(
		"/api/v1/ponds/pondsId/" + user.pondsId,
	);
	return data;
}
export { deletePondsById };
