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

export interface iUserComments extends iUser {
	resetToken: null | string;
}

export type iAddress = {
	id: string;
	zipCode: string;
	state: string;
	city: string;
	district: string;
	street: string;
	number?: string;
	complement?: String;
	createdAt: string;
	updatedAt: string;
};

export type iUserProfile = iUser & {
	address: iAddress;
};
