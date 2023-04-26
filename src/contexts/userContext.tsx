import api from "../services/api";
import { createContext, useContext, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { iUser } from "../types/user.type";
import { useToastForm } from "./toastContext";
import {
	iApiError,
	iLoginForm,
	iUserContextProps
} from "../types/contexts.type";
import {
	iSendResetPasswordEmail,
	iSendResetPasswordEmailResponse,
	iUserResetPassword,
	iUserResetPasswordResponse
} from "../types/userForms";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: any) => {
	const { toast } = useToastForm();

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
			localStorage.setItem("token@shopCar", response.data.token);
			localStorage.setItem("UUID@shopCar", response.data.user.id);
			localStorage.setItem("isSeller@shopCar", response.data.user.isSeller);
			toast({
				title: "sucess",
				message: `Logado com sucesso`,
				position: "top-left",
				color: "green.500"
			});
			navigate("/dashboard");
		} catch (error: any) {
			console.log(error);
			toast({
				title: "error",
				message: `${error.response.data.message}`,
				position: "top-left",
				color: "red.500"
			});
		}
	};

	const requestResetPassword = async (data: iSendResetPasswordEmail) => {
		try {
			const { data: response } =
				await api.post<iSendResetPasswordEmailResponse>(
					"/reset_password",
					data
				);

			return response.message;
		} catch (error) {
			const requestError = error as AxiosError<iApiError>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.log(message);
		}
	};

	const userResetPassword = async (data: iUserResetPassword) => {
		try {
			const { token } = pathParams;
			const { data: response } = await api.patch<iUserResetPasswordResponse>(
				`/reset_password/${token}`,
				data
			);

			return response.message;
		} catch (error) {
			const requestError = error as AxiosError<iApiError>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.log(message);
		}
	};

	return (
		<UserContext.Provider
			value={{ login, user, setUser, requestResetPassword, userResetPassword }}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = (): iUserContextProps => useContext(UserContext);
