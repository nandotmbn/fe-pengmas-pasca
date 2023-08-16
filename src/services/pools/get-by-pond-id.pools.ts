import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean,
	pondId: string
}

async function getPoolsByPondId(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/pools/pondsId/" + user.pondId,
	);
	return data;
}
export { getPoolsByPondId };
