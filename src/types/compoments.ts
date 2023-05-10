import { FieldError, Merge, UseFormRegisterReturn } from "react-hook-form";

import { mandatoryChildren } from "./childrenProps";
import { Dispatch, SetStateAction } from "react";
import { icarResponse } from "./cars.type";

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
	id?: string;
	color?: string;
}

export interface iRegisterCarModal {
	isOpen: boolean;
	setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export type iPaginationProps = {
	totalPage: number;
	currentPage: number;
	setCurrentPage: Dispatch<SetStateAction<number>>;
};

export type iResultMessageProps = mandatoryChildren & {
	type: "success" | "error";
	style: "single" | "doble";
	text?: string;
};
export interface iEditCarModal {
	editIsOpen: boolean;
	setEditIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
	carData: icarResponse;
}
