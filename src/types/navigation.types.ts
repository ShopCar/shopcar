import { mandatoryChildren } from "./childrenProps.type";

export interface iLinkProps extends mandatoryChildren {
	path: string;
	type: "router" | "external" | "section";
	variant: string;
}

export interface iMenuLink {
	name: string;
	path: string;
}
