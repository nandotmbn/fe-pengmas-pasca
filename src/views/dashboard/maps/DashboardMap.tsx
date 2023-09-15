import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

type positionDataType = {
	id: number;
	name: string;
	lat: number;
	lng: number;
}

function DashboardMap() {

	const [positionData, setPositionData] = useState([]);

	useEffect(() => {}, []);

	return (
		<MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
			/>
			{positionData.map((position: positionDataType) => (
				<Marker key={position.id} position={[position.lat, position.lng]}>
					<Popup>
						{position.name}
					</Popup>
				</Marker>
			))}
		</MapContainer>
	)
}

export default DashboardMap

// // components/MapComponent.js

// const MapComponent = () => {


//   return (

//   );
// };

// export default MapComponent;
