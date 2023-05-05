import { z } from "zod";
import {
	sendResetPasswordSchema,
	userResetPasswordSchema
} from "../schemas/userForms";

export type iUserResetPassword = z.infer<typeof userResetPasswordSchema>;
export type iSendResetPasswordEmail = z.infer<typeof sendResetPasswordSchema>;
