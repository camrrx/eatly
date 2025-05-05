import "./StepChoices.scss";

export default function StepChoices({
	options,
	selectedOption,
	setSelectedOption,
}: {
	options: { label: string; image: string }[];
	selectedOption: string | null;
	setSelectedOption: (opt: string) => void;
}) {
	return (
		<div className="choices-grid">
			{options.map(({ label, image }) => (
				<div
					key={label}
					className={`choice-item ${
						selectedOption === label ? "selected" : ""
					}`}
					onClick={() => setSelectedOption(label)}>
					<img src={image} alt={label} />
				</div>
			))}
		</div>
	);
}
