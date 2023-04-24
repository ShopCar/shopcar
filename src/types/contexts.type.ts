import { iUser } from "./user.type";

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
}
