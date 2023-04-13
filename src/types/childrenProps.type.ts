import { ReactNode } from "react";

export interface mandatoryChildren {
	children: ReactNode;
}

export type optionalChildren = Partial<mandatoryChildren>;
