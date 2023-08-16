import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	pondsName: string
}

async function getAllPonds(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/ponds?pondsName=" + user.pondsName,
	);
	return data;
}
export { getAllPonds };
