import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";

import { mandatoryChildren } from "./childrenProps";

export interface iLinkProps extends mandatoryChildren {
	path: string;
	variant?: string;
	type: "router" | "external" | "section";
}

export interface iInputProps {
	id: string;
	type: string;
	label: string;
	value?: string | number;
	readOnly?: boolean;
	placeholder: string;
	defaultValue?: string;
	error: FieldError | undefined | Merge<FieldError, (FieldError | undefined)[]>;
	register: UseFormRegisterReturn<string>;
}

export interface iAvatarProps {
	name: string;
	id: string;
	color?: string;
}

export interface iRegisterCarModal {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
