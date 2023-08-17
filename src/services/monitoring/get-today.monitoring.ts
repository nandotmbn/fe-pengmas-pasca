import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean;
	poolsId: string;
}

async function getTodayMonitoring(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		`/api/v1/monitor/poolsId/${user.poolsId}/today`
	);
	return data;
}
export { getTodayMonitoring };
