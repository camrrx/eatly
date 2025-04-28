import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { useEffect, useState } from "react";
import { RestaurantMapProps, RestaurantData } from "../../utils";
import "./RestaurantMap.scss";
import "leaflet/dist/leaflet.css";

export default function RestaurantMap({ filters }: RestaurantMapProps) {
	const [restaurants, setRestaurants] = useState<RestaurantData[]>([]);

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
		<div>
			<MapContainer
				center={center}
				zoom={13}
				className="restaurant-map-container">
				<TileLayer
					attribution="&copy; OpenStreetMap contributors"
					url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				/>
				{restaurants.map(r => (
					<Marker key={r.nomoffre} position={[r.latitude, r.longitude]}>
						<Popup>{r.nomoffre}</Popup>
					</Marker>
				))}
			</MapContainer>
			{/*<iframe
				src="https://data.nantesmetropole.fr/explore/embed/dataset/793866443_restaurants-en-loire-atlantique@loireatlantique/map/?utm_source=chatgpt.com&location=8,47.31379,-1.75575&basemap=jawg.streets&dataChart=eyJxdWVyaWVzIjpbeyJjaGFydHMiOlt7InR5cGUiOiJjb2x1bW4iLCJmdW5jIjoiQ09VTlQiLCJ5QXhpcyI6ImNvZGVwb3N0YWwiLCJzY2llbnRpZmljRGlzcGxheSI6dHJ1ZSwiY29sb3IiOiIjRkE4QzQ0In1dLCJ4QXhpcyI6ImNhdGVnb3JpZSIsIm1heHBvaW50cyI6NTAsInNvcnQiOiJzZXJpZTEtMSIsImNvbmZpZyI6eyJkYXRhc2V0IjoiNzkzODY2NDQzX3Jlc3RhdXJhbnRzLWVuLWxvaXJlLWF0bGFudGlxdWVAbG9pcmVhdGxhbnRpcXVlIiwib3B0aW9ucyI6eyJ1dG1fc291cmNlIjoiY2hhdGdwdC5jb20ifX19XSwidGltZXNjYWxlIjoiIiwiZGlzcGxheUxlZ2VuZCI6dHJ1ZSwiYWxpZ25Nb250aCI6dHJ1ZX0%3D&static=false&datasetcard=false&scrollWheelZoom=false"
				width="400"
				height="300"
				></iframe>*/}
		</div>
	);
}
