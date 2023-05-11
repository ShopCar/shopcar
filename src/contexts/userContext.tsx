import { AxiosError } from "axios";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { createContext, useContext, useEffect, useState } from "react";

import api from "../services/api";
import {
	iApiMessage,
	iLoginForm,
	iUserContextProps
} from "../types/contexts.type";
import { iAddress, iUser, iUserProfile } from "../types/user.type";
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
	const [owner, setOwner] = useState<null | iUser>(null);
	const [globalLoading, setGlobalLoading] = useState(true);
	const [address, setAddress] = useState<null | iAddress>(null);

	const navigate = useNavigate();
	const location = useLocation();
	const pathParams = useParams();

	const token = localStorage.getItem("token@shopCar");

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

			const toPath: string = location.state?.from?.pathname || "/";
			navigate(toPath, { replace: true });
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

	useEffect(() => {
		const userAutoLogin = async () => {
			if (token) {
				try {
					const { data } = await api.get<iUserProfile>("/profile", {
						headers: {
							Authorization: `Bearer ${token}`
						}
					});
					const { address, ...userData } = data;

					setUser(userData);
					setAddress(address);
				} catch (error) {
					const requestError = error as AxiosError<iApiMessage>;
					const message =
						requestError.response?.data.message || requestError.message;
					console.error(message);
				} finally {
					setTimeout(() => {
						setGlobalLoading(false);
					}, 1000);
				}
			}
		};

		userAutoLogin();
	}, []);

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
			value={{
				login,
				user,
				owner,
				setUser,
				address,
				setOwner,
				setAddress,
				globalLoading,
				userResetPassword,
				requestResetPassword
			}}
		>
			{children}
		</UserContext.Provider>
	);
};

export const useUserContext = (): iUserContextProps => useContext(UserContext);
