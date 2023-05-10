import { AxiosError } from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { createContext, useContext, useState } from "react";

import api from "../services/api";
import {
	iApiMessage,
	iLoginForm,
	iUserContextProps
} from "../types/contexts.type";
import { iUser } from "../types/user.type";
import { useToastForm } from "./toastContext";
import {
	iUserResetPassword,
	iSendResetPasswordEmail
} from "../types/userForms";
import { mandatoryChildren } from "../types/childrenProps";

export const UserContext = createContext({} as iUserContextProps);

export const UserProvider = ({ children }: mandatoryChildren) => {
	const { toast } = useToastForm();

	const [user, setUser] = useState<null | iUser>(null);

	const navigate = useNavigate();
	const pathParams = useParams();

	const login = async (data: iLoginForm) => {
		try {
			console.log(123);
			const response = await api.post("/login", data);

			setUser(response.data.user);

			localStorage.setItem("token@shopCar", response.data.token);
			localStorage.setItem("UUID@shopCar", response.data.user.id);
			localStorage.setItem("isSeller@shopCar", response.data.user.isSeller);
			toast({
				title: "sucess",
				message: `Logado com sucesso`,
				position: "top-left",
				color: "green.500"
			});
			navigate("/");
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
			const { data: response } = await api.post<iApiMessage>(
				"/reset_password",
				data
			);

			return response.message;
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.error(message);
		}
	};

	const userResetPassword = async (data: iUserResetPassword) => {
		try {
			const { token } = pathParams;
			const { data: response } = await api.patch<iApiMessage>(
				`/reset_password/${token}`,
				data
			);

			return response.message;
		} catch (error) {
			const requestError = error as AxiosError<iApiMessage>;
			const message =
				requestError.response?.data.message || requestError.message;
			console.error(message);
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
