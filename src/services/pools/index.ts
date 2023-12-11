import { getAllPools } from "./get-all.pools";
import { createPools } from "./create.pools";
import { getPoolsByPondId } from "./get-by-pond-id.pools";
import { deletePoolById } from "./delete-by-id-pools";
import { getPoolsById } from "./get-by-id.pools";
import { bindPools } from "./bind.pools";

const Pools = {
  getAllPools,
  getPoolsByPondId,
  createPools,
  deletePoolById,
  getPoolsById,
  bindPools,
};

export { Pools };
