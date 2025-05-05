export interface Restaurant {
	id: string;
	name: string;
	lat: number;
	lng: number;
	price: "$" | "$$" | "$$$";
	food: string;
	rating: number;
}

export interface Filters {
	price: number;
	categories: string[];
	rating: "" | "3" | "4" | "5"; // ou tu peux aussi utiliser number
}

export interface RestaurantMapProps {
	filters: Filters;
}

export interface RestaurantModalProps {
	restaurant: Restaurant;
	onClose: () => void;
}

export interface RandomChoiceButtonProps {
	filters: Filters;
	onSelect: (restaurant: Restaurant) => void;
}

export interface RestaurantData {
	nomoffre: string;
	type: string;
	categorie: string;
	adresse1: string | null;
	adresse2: string | null;
	adresse3: string | null;
	codepostal: number;
	cedex: string | null;
	spbureaudistributeur: string | null;
	commune: string;
	codeinseecommune: number;
	latitude: number;
	longitude: number;
	acces: string | null;
	commmob: string | null;
	commtel: string | null;
	commfax: string | null;
	commmail: string | null;
	commweb: string | null;
	videosurl: string | null;
	plateformeurl: string | null;
	tripadwidget: string | null;
	spvideosembed: string | null;
	classementguides: string | null;
	labelsclassementlogis: string | null;
	labeltourismehandicap: string | null;
	animauxacceptes: string | null;
	animauxinfo: string | null;
	labels: string | null;
	services: string[] | null;
	capacitenbcouverts: number | null;
	capacitenbsalles: number | null;
	capacitenbcouvertsterrasse: number | null;
	capacitenbsallesreunion: number | null;
	capacitenbsallesclim: number | null;
	spaccueilveloiti: string | null;
	languesparleesaccueil: string[] | null;
	accueilgroupe: string;
	accueilgroupemin: number | null;
	accueilgroupemax: number | null;
	ouverturealannee: string;
	ouverturegranule: string | null;
	resadirecte: string | null;
	resaenligneouinon: string | null;
	resaenligne: string | null;
	tarifs: string | null;
	modepaiement: string | null;
	localisation: {
		lon: number;
		lat: number;
	};
	departement: string;
}
