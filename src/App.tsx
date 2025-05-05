import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MapPage from "./Pages/Map/MapPage";
//import ProfilePage from './pages/ProfilePage';
import BottomMenu from "./Components/BottomMenu/BottomMenu";
import HomePage from "./Pages/Accueil/HomePage";
import StepPage from "./Pages/Step/StepPage";
export default function App() {
	return (
		<div className="eatly-container">
			<Router>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/step/:stepId" element={<StepPage />} />
					<Route path="/map" element={<MapPage />} />
				</Routes>
				<BottomMenu />
			</Router>
		</div>
	);
}
