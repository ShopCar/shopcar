import { FieldError, UseFormRegisterReturn } from "react-hook-form";

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
	placeholder: string;
	error: FieldError | undefined;
	register: UseFormRegisterReturn<string>;
}

export interface iAvatarProps {
	name: string;
	color?: string;
}
