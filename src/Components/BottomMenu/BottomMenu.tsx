import "./BottomMenu.scss";
import { FaMapMarkedAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { BsPersonHeart } from "react-icons/bs";

const BottomMenu = () => {
	const location = useLocation();

	return (
		<>
			<div className="bottomMenu-container">
				<Link to={"/"}>
					<FaMapMarkedAlt
						className={`icon-bottomMenu ${
							location.pathname === "/" ? "active" : ""
						}`}
					/>
				</Link>
				<Link to={"/home"}>
					<BsPersonHeart
						className={`icon-bottomMenu ${
							location.pathname === "/home" ? "active" : ""
						}`}
					/>
				</Link>
			</div>
		</>
	);
};

export default BottomMenu;
