import { useEffect, useState } from "react";
import RestaurantMap from "../../Components/RestaurantMap/RestaurantMap";
import { Filters } from "../../utils";
import "./MapPage.scss";
import CategorySelect from "../../Components/CategorySelect/CategorySelect";

export default function MapPage() {
	const [filters, setFilters] = useState<Filters>({
		price: "",
		categories: [],
		rating: "",
	});

	const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

	useEffect(() => {
		setFilters({
			price: "",
			categories: selectedCategories,
			rating: "",
		});
	}, [selectedCategories]);

	return (
		<div className="map-page-container">
			<div className="map-page-container__header">
				<CategorySelect
					selectedCategories={selectedCategories}
					setSelectedCategories={setSelectedCategories}
				/>
			</div>
			<RestaurantMap filters={filters} />
		</div>
	);
}
