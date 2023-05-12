import {
	Dispatch,
	SetStateAction,
	createContext,
	useContext,
	useState
} from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import carsApi from "../services/carsApi";
import { AxiosResponse } from "axios";
import { iCar, iCarsBrands, iCarResponse } from "../types/cars.type";

export const CarContext = createContext({} as iCarContextProps);
interface iCarContextProps {
	cars: Array<iCar> | null;
	setCars: Dispatch<SetStateAction<iCar[] | null>>;
	brands: Array<string> | null;
	setBrands: Dispatch<SetStateAction<string[] | null>>;
	getCarsBrands: () => Promise<string[]>;
	getCarsByBrand: (brand: string) => Promise<iCar[]>;
	allCars: iCarResponse[] | null;
	setAllCars: Dispatch<SetStateAction<iCarResponse[] | null>>;
	filteredCars: iCarResponse[] | null;
	setFilteredCars: Dispatch<SetStateAction<iCarResponse[] | null>>;
}
export const CarProvider = ({ children }: any) => {
	const navigate = useNavigate();
	const location = useLocation();
	const pathParams = useParams();
	const [cars, setCars] = useState<Array<iCar> | null>(null);
	const [brands, setBrands] = useState<Array<string> | null>(null);
	const [allCars, setAllCars] = useState<iCarResponse[] | null>(null);
	const [filteredCars, setFilteredCars] = useState<iCarResponse[] | null>(null);

	const getCarsBrands = async () => {
		const response: AxiosResponse<iCarsBrands> = await carsApi("");
		return Object.keys(response.data);
	};
	const getCarsByBrand = async (brand: string) => {
		const response: AxiosResponse<iCar[]> = await carsApi(`?brand=${brand}`);
		return response.data;
	};

	return (
		<CarContext.Provider
			value={{
				cars,
				setCars,
				brands,
				setBrands,
				allCars,
				setAllCars,
				getCarsBrands,
				getCarsByBrand,
				filteredCars,
				setFilteredCars
			}}
		>
			{children}
		</CarContext.Provider>
	);
};

export const useCarContext = () => useContext(CarContext);
