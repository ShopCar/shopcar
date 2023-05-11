import { Dispatch, SetStateAction } from "react";
import { iAddress, iUser } from "./user.type";
import { iSendResetPasswordEmail, iUserResetPassword } from "./userForms";

export interface iGlobalContextProps {
	isVisible: boolean;
	windowSize: {
		innerWidth: number;
	};
}

export interface iLoginForm {
	email: string;
	password: string;
}

export interface iUserContextProps {
	user: iUser | null;
	owner: iUser | null;
	globalLoading: boolean;
	address: iAddress | null;
	requestResetPassword: (
		data: iSendResetPasswordEmail
	) => Promise<string | undefined>;
	login: (data: iLoginForm) => Promise<void>;
	setUser: Dispatch<SetStateAction<iUser | null>>;
	setOwner: Dispatch<SetStateAction<iUser | null>>;
	// setGlobalLoading: Dispatch<SetStateAction<boolean>>;
	setAddress: Dispatch<SetStateAction<iAddress | null>>;
	userResetPassword: (data: iUserResetPassword) => Promise<string | undefined>;
}

export interface iApiMessage {
	message: string;
}
