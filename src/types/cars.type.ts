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