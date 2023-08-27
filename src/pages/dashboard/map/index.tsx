import React from "react";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("@/views/dashboard/map/Map"), { ssr: false });

function MapPage() {
	return (
		<React.Fragment>
			<Map />
		</React.Fragment>
	);
}

export default MapPage;
