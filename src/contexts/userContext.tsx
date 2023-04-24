import api from "../services/api";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { iLoginForm, iUserContextProps } from "../types/contexts.type";
import { useToastForm } from "./toastContext";
import { iUser } from "../types/user.type";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: any) => {
    const {toast} = useToastForm()

    const [user, setUser] = useState<null | iUser>(null);
    const [token, setToken] = useState<string | null>(null);

    const navigate = useNavigate();
    const location = useLocation();
    const pathParams = useParams();

    const login = async (data: iLoginForm) => {
        try {
            const response = await api.post("/login", data);
            setUser(response.data.user);
            setToken(response.data.token);
            localStorage.setItem("token@shopCar", response.data.token)
            localStorage.setItem("UUID@shopCar", response.data.user.id)
            localStorage.setItem("isSeller@shopCar", response.data.user.isSeller)
            toast({
                title: "sucess",
                message: `Logado com sucesso`,
                position: "top-left",
                color: "green.500",
            });
            navigate("/dashboard")
        } catch (error: any) {
            console.log(error);
            toast({
                title: "error",
                message: `${error.response.data.message}`,
                position: "top-left",
                color: "red.500",
            });
        }
    };

    return (
        <UserContext.Provider value={{ login, user, setUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = (): iUserContextProps => useContext(UserContext);
