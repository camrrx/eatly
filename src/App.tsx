import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapPage from "./Pages/Map/MapPage";
//import ProfilePage from './pages/ProfilePage';
import EatlyIcon from "/Users/Camille/eatly/src/assets/EatlyBrown.png";

export default function App() {
	return (
		<div className="eatly-container">
			<img src={EatlyIcon} alt="Map" className="icon" />
			<Router>
				<Routes>
					<Route path="/" element={<MapPage />} />
				</Routes>
			</Router>
		</div>
	);
}
