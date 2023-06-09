export interface iCarsBrands {
	chevrolet: Array<{name: string}>
	citroën: Array<{name: string}>
	fiat: Array<{name: string}>
	ford: Array<{name: string}>
	honda: Array<{name: string}>
	hyundai: Array<{name: string}>
	nissan: Array<{name: string}>
	peugeot: Array<{name: string}>
	renault: Array<{name: string}>
	toyota: Array<{name: string}>
	volkswagen: Array<{name: string}>
}

export interface iCar {
	id: string
	name: string
	brand: string
	year: string
	fuel: number
	value: number
}

export interface icarResponse{
	id: string
	brand: string
	model: string
	year: string
	fuel: string
	km: string
	color: string
	description: string | null
	isPublished: boolean
	price: string
	createdAt: string
	updatedAt: string
	user: {
		id: string
		name: string
		birthdate: string
		phone: string
		cpf: string
		description: string | null
		email: string
		isSeller: boolean,
		createdAt: string
		updatedAt: string
	}
	images: {
		id: string
		cover: string
		gallery: string[]
	}
}

export interface icurrentCar{
	id: string
	brand: string
	model: string
	year: string
	fuel: string
	km: string
	color: string
	description: string | null
	isPublished: boolean
	price: string
	createdAt: string
	updatedAt: string
	images: {
		id: string
		cover: string
		gallery: string[]
	}
}