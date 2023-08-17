import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean;
	poolsId: string;
}

async function getTodaySampling(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		`/api/v1/sample/poolsId/${user.poolsId}/today`
	);
	return data;
}
export { getTodaySampling };
