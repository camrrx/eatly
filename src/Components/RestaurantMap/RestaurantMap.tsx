import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { RestaurantMapProps, RestaurantData } from "../../utils";
import "./RestaurantMap.scss";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import forkIcon from "../../assets/eatfork.png";
export default function RestaurantMap({ filters }: RestaurantMapProps) {
	const [restaurants, setRestaurants] = useState<RestaurantData[]>([]);

	const forkMarker = new L.Icon({
		iconUrl: forkIcon,
		iconSize: [40, 40],
		iconAnchor: [30, 30],
		popupAnchor: [1, -34],
		shadowSize: [41, 41],
	});

	useEffect(() => {
		fetch("/restaurants.json")
			.then(res => res.json())
			.then((data: RestaurantData[]) => {
				if (filters.categories.length === 0) {
					setRestaurants(data);
				} else {
					const filtered = data.filter(restaurant =>
						filters.categories.includes(restaurant.categorie)
					);
					setRestaurants(filtered);
				}
			});
	}, [filters.categories]);

	const center: LatLngExpression = [47.2184, -1.5536];

	return (
		<MapContainer
			center={center}
			zoom={13}
			className="restaurant-map-container">
			<TileLayer
				attribution="&copy; OpenStreetMap contributors"
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			{restaurants.map(r => (
				<Marker
					key={r.nomoffre}
					position={[r.latitude, r.longitude]}
					icon={forkMarker}>
					<Popup>{r.nomoffre}</Popup>
				</Marker>
			))}
		</MapContainer>
	);
}
