import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import "./CategorySelect.scss";

const categories = [
	"Pizzeria",
	"Brasserie",
	"Cuisine traditionnelle",
	"Restauration rapide",
	"Gastronomique",
	"Bistrot",
	"Crêperie",
	"Fruits de mer",
];

export default function CategorySelect({
	selectedCategories,
	setSelectedCategories,
}: {
	selectedCategories: string[];
	setSelectedCategories: (value: string[]) => void;
}) {
	const toggleCategory = (category: string) => {
		if (selectedCategories.includes(category)) {
			setSelectedCategories(selectedCategories.filter(c => c !== category));
		} else {
			setSelectedCategories([...selectedCategories, category]);
		}
	};

	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger className="category-select-trigger">
				<div className="selected-categories">
					{selectedCategories.length === 0 ? (
						"Choisir une ou plusieurs catégories"
					) : (
						<>
							{selectedCategories.slice(0, 2).join(", ")}
							{selectedCategories.length > 2 && (
								<>... (+{selectedCategories.length - 2})</>
							)}
						</>
					)}
				</div>
				<ChevronDownIcon style={{ marginLeft: "8px" }} />
			</DropdownMenu.Trigger>

			<DropdownMenu.Content className="category-select-content">
				{categories.map((category, index) => (
					<DropdownMenu.Item
						key={category + index}
						className="category-select-item"
						onSelect={e => {
							e.preventDefault(); // empêche la fermeture automatique
							toggleCategory(category);
						}}>
						<div>{category}</div>
						{selectedCategories.includes(category) && <CheckIcon />}
					</DropdownMenu.Item>
				))}
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
