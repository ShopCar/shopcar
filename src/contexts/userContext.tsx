import api from "../services/api";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { iLoginForm, iUserContextProps } from "../types/contexts.type";
import { useToastForm } from "./toastContext";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: any) => {
    const { toast } = useToastForm();

    const [user, setUser] = useState<true | null | undefined>(null);
    const [token, setToken] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const pathParams = useParams();

    const login = async (data: iLoginForm) => {
        try {
            const response = await api.post("/login", data);

            setUser(response.data.user);
            setToken(response.data.token);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <UserContext.Provider value={{ login }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): iUserContextProps => useContext(UserContext);
