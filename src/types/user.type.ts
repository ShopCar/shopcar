export interface iUser {
	id: string;
	name: string;
	birthdate: string;
	phone: string;
	cpf: string;
	description: null | string;
	email: string;
	isSeller: true;
	createdAt: string;
	updatedAt: string;
}

export interface iUserComments extends iUser{
	resetToken: null | string;
}
