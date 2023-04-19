import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import carsApi from "../services/carsApi";
import { AxiosResponse } from "axios";
import { iCar, iCarsBrands } from "../types/cars.type";

export const CarContext = createContext({});

export const CarProvider = ({ children }: any) => {

	const navigate = useNavigate();
	const location = useLocation();
	const pathParams = useParams();
	const [cars, setCars] = useState(null)

	const getCarsBrands = async () => {
		const response: AxiosResponse<iCarsBrands> = await carsApi("");
		return Object.keys(response.data)
	}
	const getCarsByBrand = async (brand: string) => {
		const response: AxiosResponse<iCar[]> = await carsApi(`?brand=${brand}`);
		return response.data
	}

	return <CarContext.Provider value={{}}>{children}</CarContext.Provider>;
};

export const useCarrContext = () => useContext(CarContext);
