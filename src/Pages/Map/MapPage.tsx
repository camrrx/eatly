import { useEffect, useState } from "react";
import RestaurantMap from "../../Components/RestaurantMap/RestaurantMap";
import { Filters } from "../../utils";
import "./MapPage.scss";
import CategorySelect from "../../Components/CategorySelect/CategorySelect";
import PriceSelect from "../../Components/PriceSelect/PriceSelect";
import EatlyIcon from "/Users/Camille/eatly/src/assets/eatly_logo.png";

export default function MapPage() {
	const [filters, setFilters] = useState<Filters>({
		price: 1000,
		categories: [],
		rating: "",
	});

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
	const [selectedPrice, setSelectedPrice] = useState<number>();

	useEffect(() => {
		setFilters({
			price: 1000,
			categories: selectedCategories,
			rating: "",
		});
	}, [selectedCategories]);

	return (
		<div className="map-page-container">
			<img src={EatlyIcon} alt="Map" className="icon" />

			<div className="map-page-container__header">
				<CategorySelect
					selectedCategories={selectedCategories}
					setSelectedCategories={setSelectedCategories}
				/>
				<PriceSelect
					selectedPrice={selectedPrice}
					setSelectedPrice={setSelectedPrice}
				/>
			</div>
			<div className="map-page-container__map">
				<RestaurantMap filters={filters} />
			</div>
		</div>
	);
}
