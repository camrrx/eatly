import { Link } from "react-router-dom";
import "./HomePage.scss";
import EatlyIcon from "/Users/Camille/eatly/src/assets/eatly_logo.png";
import { FaChevronCircleRight } from "react-icons/fa";

export default function HomePage() {
	return (
		<div className="home-page-container">
			<img src={EatlyIcon} alt="Map" className="icon" />
			<Link to={"/step/0"}>
				<button className="button">
					<span>Commençons</span>
					<FaChevronCircleRight />
				</button>
			</Link>
		</div>
	);
}
