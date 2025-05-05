import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { steps } from "../../utils/choicesData";
import StepChoices from "../../Components/Step/StepChoices";
import "./StepPage.scss";
import EatlyIcon from "/Users/Camille/eatly/src/assets/eatly_logo.png";
import { FaChevronCircleRight } from "react-icons/fa";

export default function StepPage() {
	const navigate = useNavigate();
	const { stepId } = useParams();
	const currentStep = steps[Number(stepId)];
	const [selectedOption, setSelectedOption] = useState<string | null>(null);

	const handleNext = () => {
		if (selectedOption) {
			const nextStepId = Number(stepId) + 1;
			if (nextStepId < steps.length) {
				navigate(`/step/${nextStepId}`);
			} else {
				navigate("/result"); // fin du parcours
			}
		}
	};

	return (
		<div className="step-page-container">
			<img src={EatlyIcon} alt="Map" className="icon" />
			<h2>{currentStep.title}</h2>
			<StepChoices
				options={currentStep.options}
				selectedOption={selectedOption}
				setSelectedOption={setSelectedOption}
			/>
			<button
				className="button"
				disabled={!selectedOption}
				onClick={handleNext}>
				<span>Suivant</span>
				<FaChevronCircleRight />
			</button>
		</div>
	);
}
