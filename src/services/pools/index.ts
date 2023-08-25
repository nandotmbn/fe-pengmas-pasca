import { getAllPools } from "./get-all.pools";
import { createPools } from "./create.pools";
import { getPoolsByPondId } from "./get-by-pond-id.pools";
import { getPoolsById } from "./get-by-id.pools";
import { bindPools } from "./bind.pools";

const Pools = {
	getAllPools,
	getPoolsByPondId,
	createPools,
	getPoolsById,
	bindPools
};

export { Pools };
