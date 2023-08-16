import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	poolsName: string
}

async function getAllPools(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/pools?poolsName=" + user.poolsName,
	);
	return data;
}
export { getAllPools };
