import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean;
	poolsId: string;
	from: string;
	to: string;
	limit: number;
	page: number;
	newestTime: "true" | "false";
}

async function getAllSampling(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		`/api/v1/sample/poolsId/${user.poolsId}?from=${user.from}&to=${user.to}&limit=${user.limit}&page=${user.page}&newestTime=${user.newestTime}`
	);
	return data;
}
export { getAllSampling };
