import { getAllPools } from "./get-all.pools";
import { createPools } from "./create.pools";
import { getPoolsByPondId } from "./get-by-pond-id.pools";
import { getPoolsById } from "./get-by-id.pools";

const Pools = {
	getAllPools,
	getPoolsByPondId,
	createPools,
	getPoolsById
};

export { Pools };
