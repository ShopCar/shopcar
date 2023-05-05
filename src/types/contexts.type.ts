import { iUser } from "./user.type";
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
	login: (data: iLoginForm) => Promise<void>;
	user: iUser | null;
	setUser: React.Dispatch<React.SetStateAction<iUser | null>>;
	requestResetPassword: (
		data: iSendResetPasswordEmail
	) => Promise<string | undefined>;
	userResetPassword: (data: iUserResetPassword) => Promise<string | undefined>;
}

export interface iApiMessage {
	message: string;
}
