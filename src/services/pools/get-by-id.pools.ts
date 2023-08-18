import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	poolsId: string
}

async function getPoolsById(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/pools/poolsId/" + user.poolsId,
	);
	return data;
}
export { getPoolsById };
