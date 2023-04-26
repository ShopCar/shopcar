import { z } from "zod";

export const sendResetPasswordSchema = z.object({
	email: z.string().min(1, "Campo obrigatório").email("Digite um e-mail válido")
});

export const userResetPasswordSchema = z
	.object({
		password: z
			.string()
			.min(8, "Senha deve conter no mínimo 8 caracteres")
			.regex(/[A-Z]/, "Senha deve conter ao menos uma letra maiúscula")
			.regex(/[a-z]/, "Senha deve conter ao menos uma letra minúscula")
			.regex(/[0-9]/, "Senha deve conter ao menos um número")
			.regex(/(\W)|_/, "Senha deve conter ao menos um caracter especial"),
		confirmPassword: z.string()
	})
	.refine(data => data.password === data.confirmPassword, {
		message: "A senha não corresponde",
		path: ["confirmPassword"]
	});
