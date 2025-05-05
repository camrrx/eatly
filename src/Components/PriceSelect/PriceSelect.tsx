import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Slider from "@radix-ui/react-slider";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import "./PriceSelect.scss";

export default function PriceSelectDropdown({
	selectedPrice,
	setSelectedPrice,
}: {
	selectedPrice: number | undefined;
	setSelectedPrice: (value: number) => void;
}) {
	return (
		<DropdownMenu.Root>
			<DropdownMenu.Trigger asChild>
				<button className="price-select-dropdown-trigger">
					{selectedPrice ? `${selectedPrice} €` : "Choisir un prix"}
					<ChevronDownIcon />
				</button>
			</DropdownMenu.Trigger>

			<DropdownMenu.Content
				className="price-select-dropdown-content"
				sideOffset={5}>
				<div className="price-dropdown-content">
					<div className="price-label">
						Prix maximum : {selectedPrice ?? 50} €
					</div>
					<Slider.Root
						className="price-slider"
						value={[selectedPrice ?? 50]}
						onValueChange={value => setSelectedPrice(value[0])}
						min={0}
						max={100}
						step={1}>
						<Slider.Track className="price-slider-track">
							<Slider.Range className="price-slider-range" />
						</Slider.Track>
						<Slider.Thumb className="price-slider-thumb" />
					</Slider.Root>
				</div>
			</DropdownMenu.Content>
		</DropdownMenu.Root>
	);
}
