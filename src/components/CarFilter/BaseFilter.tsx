import {
	Box,
	Flex,
	Input,
	Button,
	VStack,
	Heading,
	Accordion,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	AccordionButton,
	useColorModeValue
} from "@chakra-ui/react";

import { useCarContext } from "../../contexts/carContext";
import { useEffect, useState } from "react";
import { icarResponse } from "../../types/cars.type";


interface ifilters {
	brand: string[];
	color: string[];
	model: string[];
	year: string[];
	fuel: string[];
}

const BaseFilter = () => {
	const {brands, setAllCars, allCars} = useCarContext()
	const years = ["2010", "2012", "2013", "2015", "2018", "2021", "2022"];
	const fuels = ["Flex", "Elétrico", "Híbrido"];
	const colors = ["Azul", "Branca", "Cinza", "Prata", "Preto", "Verde", "Vermelho", "Laranja", "Amarelo"];
	const models = [...new Set(allCars?.map(car => car.model.split(" ").slice(0, 2).join(" ")))];
	
	const {filteredCars, setFilteredCars} = useCarContext()

	const [filters, setFilters] = useState<ifilters>({
		brand: [], color: [], model: [], year: [], fuel: []
	})
	
	
	useEffect(() => {
		const handleBrandFilter = () => {
			const filtersNames = Object.keys(filters);

			let allFilteredCars: icarResponse[] | string[] = [""]
			
			filtersNames.forEach( filter => {	
				let filtering = []
				for(let i = 0; i < filters[filter].length; i++){					
					allCars?.forEach( car => {
						if(filter === "model" && car[filter].includes(filters[filter][i])){
							filtering.push(car)
						}
						else if(filters[filter][i] === car[filter]){
							filtering.push(car)
						}
					})
				}
				if(allFilteredCars[0] === "" && filters[filter].length > 0){
					console.log(filtering)
					allFilteredCars = [...filtering]
				}
				else if(filters[filter].length > 0){
					console.log(filtering)
					allFilteredCars = filtering.filter((elem) => allFilteredCars.includes(elem))
				}
				console.log(allFilteredCars);
			})
			console.log(allFilteredCars);

			setFilteredCars(allFilteredCars)
		}
		handleBrandFilter()
		console.log(filters);
		if (filters.brand.length === 0 && filters.model.length === 0 && filters.color.length === 0 &&filters.year.length === 0){
			setFilteredCars(null)
		}
	},[filters])

	const acItemConfig = { border: "none" };
	const jSpaceBetween = "space-between";
	const alignStack = { sm: "flex-start", lg: "center" };
	const colorText = useColorModeValue("grey.1", "grey.10");

	const wInput = { w: "full" };
	const fConfig = {
		w: "full",
		gap: "1rem"
	};
	const hdConfig = {
		pb: "0.5rem",
		size: "7",
		variant: "600"
	};
	const acIconConfig = {
		fontSize: "16px",
		ml: "16px"
	};
	const acTextConfig = {
		size: "2",
		color: "grey.3",
		variant: "500"
	};
	const acButtonConfig = {
		p: "0",
		color: colorText,
		bg: "none!important",
		fontWeight: "semibold",
		justifyContent: jSpaceBetween
	};
	const accordionConfig = {
		w: "15rem",
		px: "0.5rem",
		allowToggle: true,
		borderTopColor: "none"
	};

	return (
		<VStack
			pb="1rem"
			w="15rem"
			spacing="2rem"
			align={alignStack}
			justifyContent={jSpaceBetween}
		>
			<VStack
				spacing="0.5rem"
				align="flex-start"
				justifyContent={jSpaceBetween}
			>
				<Accordion {...accordionConfig}>  {/* BRAND  V*/}
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Marca
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{brands && Object.values(brands).map(name => (
								<Button p="0" height="100%" justifyContent="flex-start" {...acTextConfig} key={name}
								onClick={(e) =>{
									setFilters((old: ifilters) => {
										const newBrand = old.brand.includes(name)? old.brand.filter(elem => elem !== name) : [...old.brand, name]
										return {...old, brand: newBrand}
									});
									e.currentTarget.style.color = e.currentTarget.style.color? "" : "#4529e6";
								}}>
									{name}
								</Button>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>  {/* MODEL  V*/}
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Modelo
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{models.map(name => (
								<Button p="0" height="100%" justifyContent="flex-start" {...acTextConfig} key={name}
								onClick={(e) =>{
									setFilters((old: ifilters) => {
										const newModel = old.model.includes(name)? old.model.filter(elem => elem !== name) : [...old.model, name]
										return {...old, model: newModel}
									});
									e.currentTarget.style.color = e.currentTarget.style.color? "" : "#4529e6";
								}}>
									{name}
								</Button>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>  {/* COLOR  V*/}
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Cor
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{colors.map(color => (
								<Button p="0" height="100%" justifyContent="flex-start" {...acTextConfig} key={color}
								onClick={(e) => {
									setFilters((old: ifilters) => {
										const newColor = old.color.includes(color)? old.color.filter(elem => elem !== color) : [...old.color, color]
										return {...old, color: newColor}
									});
									e.currentTarget.style.color = e.currentTarget.style.color? "" : "#4529e6";
								}}>
									{color}
								</Button>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>  {/* YEAR */}
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Ano
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{years.map(name => (
								<Button p="0" height="100%" justifyContent="flex-start" {...acTextConfig} key={name}
								onClick={(e) => {
									setFilters((old: ifilters) => {
										const newyear = old.year.includes(name)? old.year.filter(elem => elem !== name) : [...old.year, name]
										return {...old, year: newyear}
									});
									e.currentTarget.style.color = e.currentTarget.style.color? "" : "#4529e6";
								}}>
									{name}
								</Button>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>  {/* FUEL */}
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Combustível
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{fuels.map(name => (
								<Button p="0" height="100%" justifyContent="flex-start" {...acTextConfig} key={name}
									onClick={(e) => {
										setFilters((old: ifilters) => {
											const newFuel = old.fuel.includes(name)? old.fuel.filter(elem => elem !== name) : [...old.fuel, name]
											return {...old, fuel: newFuel}
										});
										e.currentTarget.style.color = e.currentTarget.style.color? "" : "#4529e6";
									}}
								>
									{name}
								</Button>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Box px={hdConfig.pb} pb={hdConfig.pb}>
					<Heading {...hdConfig}>Km</Heading>
					<Flex {...fConfig}>
						<Input
							{...wInput}
							variant="filled"
							textAlign="center"
							placeholder="Mínima"
						/>
						<Input
							{...wInput}
							variant="filled"
							textAlign="center"
							placeholder="Máxima"
						/>
					</Flex>
				</Box>
				<Box px={hdConfig.pb} pb={hdConfig.pb}>
					<Heading {...hdConfig}>Preço</Heading>
					<Flex {...fConfig}>
						<Input
							{...wInput}
							variant="filled"
							textAlign="center"
							placeholder="Mínima"
						/>
						<Input
							{...wInput}
							variant="filled"
							textAlign="center"
							placeholder="Máxima"
						/>
					</Flex>
				</Box>
			</VStack>
			<Flex justifyContent="center" w="full" mt="1rem!important">
				<Button w="13rem" h="2.25rem" variant="brand1">
					Limpar filtros
				</Button>
			</Flex>
		</VStack>
	);
};

export default BaseFilter;
