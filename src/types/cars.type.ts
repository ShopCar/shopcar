export interface iCarsBrands {
	chevrolet: Array<{ name: string }>;
	citroën: Array<{ name: string }>;
	fiat: Array<{ name: string }>;
	ford: Array<{ name: string }>;
	honda: Array<{ name: string }>;
	hyundai: Array<{ name: string }>;
	nissan: Array<{ name: string }>;
	peugeot: Array<{ name: string }>;
	renault: Array<{ name: string }>;
	toyota: Array<{ name: string }>;
	volkswagen: Array<{ name: string }>;
}

export interface iCar {
	id: string;
	name: string;
	brand: string;
	year: string;
	fuel: number;
	value: number;
}
export interface iImagesBase64 {
	id: string;
	cover: boolean;
	imagemBase64: string;
}

export interface iCarResponse {
	id: string;
	brand: string;
	model: string;
	year: string;
	fuel: string;
	km: string;
	color: string;
	description: string | null;
	isPublished: boolean;
	price: string;
	createdAt: string;
	updatedAt: string;
	user: {
		id: string;
		name: string;
		birthdate: string;
		phone: string;
		cpf: string;
		description: string | null;
		email: string;
		isSeller: boolean;
		createdAt: string;
		updatedAt: string;
	};
	images: {
		id: string;
		cover: string;
		gallery: string[];
	};
	imagesBase64: iImagesBase64[];
}

export interface iCurrentCar {
	id: string;
	brand: string;
	model: string;
	year: string;
	fuel: string;
	km: string;
	color: string;
	description: string | null;
	isPublished: boolean;
	price: string;
	createdAt: string;
	updatedAt: string;
	images: iImagesBase64;
	userId: string;
	userName: string;
	userDescription: string;
	userPhone: string;
}

export interface iCarComments {
	id: string;
	brand: string;
	model: string;
	year: string;
	fuel: string;
	km: string;
	color: string;
	description: string | null;
	isPublished: boolean;
	price: string;
	createdAt: string;
	updatedAt: string;
}

export type iUserCars = {
	userName: string;
	userId: string;
	userDescription: string;
	cars: {
		id: string;
		brand: string;
		model: string;
		year: string;
		fuel: string;
		km: string;
		color: string;
		description: string | null;
		isPublished: boolean;
		price: string;
		createdAt: string;
		updatedAt: string;
		images: {
			id: string;
			cover: string;
			gallery: string[];
		};
	}[];
};
