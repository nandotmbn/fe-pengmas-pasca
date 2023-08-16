import { validateRegister } from "@/validators";
import { message } from "antd";
import { serviceInstance } from "..";
import _ from "lodash"

interface IRegister {
	data: {
		fullName: string;
		username: string;
		password: string;
	};
	isNotify: boolean;
}

async function register(user: IRegister) {
	const { data } = await serviceInstance( user.isNotify).post(
		"/api/v1/auth/register",
		user.data,
	);
	return data;
}
export { register };
