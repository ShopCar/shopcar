import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const CarContext = createContext({});

export const CarProvider = ({ children }: any) => {

	const navigate = useNavigate();
	const location = useLocation();
	const pathParams = useParams();

	return <CarContext.Provider value={{}}>{children}</CarContext.Provider>;
};

export const useCarrContext = () => useContext(CarContext);
