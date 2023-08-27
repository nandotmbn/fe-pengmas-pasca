import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function LeafletMap() {
	return (
		<MapContainer
			
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}></Marker>
		</MapContainer>
	);
}

export default LeafletMap;
