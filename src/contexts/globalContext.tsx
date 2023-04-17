import { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { mandatoryChildren } from "../types/childrenProps";
import { iGlobalContextProps } from "../types/contexts.type";

export const GlobalContext = createContext({} as iGlobalContextProps);

export const GlobalProvider = ({ children }: mandatoryChildren) => {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const getWindowSize = () => {
		const { innerWidth } = window;
		return { innerWidth };
	};

	const [windowSize, setWindowSize] = useState(getWindowSize());

	useEffect(() => {
		const handleWindowResize = () => {
			setWindowSize(getWindowSize());
		};

		window.addEventListener("resize", handleWindowResize);

		return () => {
			window.removeEventListener("resize", handleWindowResize);
		};
	}, []);

	return (
		<GlobalContext.Provider value={{ isVisible, windowSize }}>
			{children}
		</GlobalContext.Provider>
	);
};

export const useGlobalContext = (): iGlobalContextProps =>
	useContext(GlobalContext);
