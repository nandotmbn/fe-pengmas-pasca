import { serviceInstance } from "..";

interface ILogin {
	isNotify: boolean
}

async function getMyProfile(user: ILogin) {
	const { data } = await serviceInstance(user.isNotify).get(
		"/api/v1/users",
	);
	return data;
}
export { getMyProfile };
