import { serviceInstance } from "..";

interface IBind {
	isNotify: boolean;
  poolsId: string;
	data: {
		deviceName: string;
	};
}

async function bindPools(user: IBind) {
	const { data } = await serviceInstance(user.isNotify).put(
		"/api/v1/pools/bind/poolsId/" + user.poolsId,
		user.data
	);
	return data;
}
export { bindPools };
