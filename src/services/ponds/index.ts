import { getAllPonds } from "./get-all.ponds";
import { getAllPondsByCityId } from "./get-by-city-id.ponds";
import { createPonds } from "./create.ponds";
import { deletePondsById } from "./delete-by-id.ponds";

const Ponds = {
	getAllPonds,
	createPonds,
	getAllPondsByCityId,
	deletePondsById
};

export { Ponds };
