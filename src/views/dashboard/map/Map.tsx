import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";

function LeafletMap() {
	return (
		<div>
			<h1>Leaflet Map Example</h1>
			<div style={{ height: '400px', width: '100%' }}>
				<MapContainer center={[51.505, -0.09]} zoom={13}>
					<TileLayer
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
						attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					/>
					<Marker position={[51.505, -0.09]}>
						{/* You can add any additional components or popups here */}
					</Marker>
				</MapContainer>
			</div>
		</div>
	);
}

export default LeafletMap;
