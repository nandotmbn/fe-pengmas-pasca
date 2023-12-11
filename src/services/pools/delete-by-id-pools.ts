import { serviceInstance } from "..";

interface ILogin {
  isNotify: boolean;
  poolId: string;
}

async function deletePoolById(user: ILogin) {
  const { data } = await serviceInstance(user.isNotify).delete(
    "/api/v1/pools/poolsId/" + user.poolId
  );
  return data;
}
export { deletePoolById };
