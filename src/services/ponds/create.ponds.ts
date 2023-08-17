import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean;
	data: {
		pondsName: string;
		cityId: string;
	};
}

async function createPonds(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).post(
		"/api/v1/ponds?pondsName",
		user.data
	);
	return data;
}
export { createPonds };
