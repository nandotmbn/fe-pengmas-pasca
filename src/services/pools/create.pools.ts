import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean;
	data: {
		poolsName: string;
		pondsId: string;
	};
}

async function createPools(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).post(
		"/api/v1/pools",
		user.data
	);
	return data;
}
export { createPools };
