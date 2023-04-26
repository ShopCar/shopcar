import { z } from "zod";
import {
	sendResetPasswordSchema,
	userResetPasswordSchema
} from "../schemas/userForms";

export type iSendResetPasswordEmailResponse = { message: string };
export type iSendResetPasswordEmail = z.infer<typeof sendResetPasswordSchema>;

export type iUserResetPassword = z.infer<typeof userResetPasswordSchema>;
export type iUserResetPasswordResponse = iSendResetPasswordEmailResponse;
