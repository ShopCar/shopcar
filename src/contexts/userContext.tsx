import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }: any) => {
	const [user, setUser] = useState<true | null | undefined>(null);

	const navigate = useNavigate();
	const location = useLocation();
	const pathParams = useParams();

	return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};

export const useUserContext = () => useContext(UserContext);
