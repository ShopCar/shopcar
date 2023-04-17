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
}
