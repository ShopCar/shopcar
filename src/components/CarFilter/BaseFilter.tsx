import {
	Box,
	Flex,
	Text,
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
import api from "../../services/api";

const BaseFilter = () => {
	const {brands, setAllCars, allCars} = useCarContext()
	const years = ["2010", "2012", "2013", "2015", "2018", "2021", "2022"];
	const fuels = ["Flex", "Elétrico", "Híbrido"];
	const colors = ["Azul", "Branca", "Cinza", "Prata", "Preto", "Verde", "Vermelho", "Laranja", "Amarelo"];
	const models = [...new Set(allCars?.map(car => car.model.split(" ").slice(0, 2).join(" ")))];
	
	const {filteredCars, setFilteredCars} = useCarContext()

	const [activeFilter, setActiveFilter] = useState("");
	const [statusBrandFilter, setStatusBrandFilter] = useState(false)
	const [brandFilter, setBrandFilter] = useState<string[]>([]);
	const [brandName, setBrandName] = useState<string>("");
	const [colorFilter, setColorFilter] = useState(false);
	const [modelFilter, setModelFilter] = useState(false);
	const [yearFilter, setYearFilter] = useState(false);
	
	useEffect(() => {
		if (brandFilter.length === 0 && !colorFilter && !modelFilter && !yearFilter){
			setFilteredCars(null)
		}
	},[brandFilter, colorFilter, modelFilter, yearFilter])

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

	const handleBrandFilter = async (brand: string) =>{
		brandFilter.includes(brand)? true : setBrandFilter((old) => [...old, brand])
		
		console.log(brandFilter)
		
		const filteredCarsByBrand = allCars?.filter(car => brandFilter.includes(car.brand))

		if(!filteredCars || filteredCars?.length === 0){
			setFilteredCars(filteredCarsByBrand? filteredCarsByBrand : [])

		}else{
			setFilteredCars(oldFilter => {
				const newFilter = oldFilter?.filter(value => filteredCarsByBrand?.includes(value));
				return newFilter? newFilter : []
			})
		}
	}

	useEffect(() => {
		handleBrandFilter(brandName)	
	}, [statusBrandFilter])

	const handleColorFilter = async (color: string) =>{
		const filteredCarsByColor = allCars?.filter(car => car.color === color)

		if(!filteredCars || filteredCars?.length === 0){
			setFilteredCars(filteredCarsByColor? filteredCarsByColor : [])
		}else{
			setFilteredCars(oldFilter => {
				const newFilter = oldFilter?.filter(value => filteredCarsByColor?.includes(value));
				return newFilter? newFilter : []
			})
		}
	}

	const handleModelFilter = async (name: string) =>{
		if (activeFilter === name) {
			setActiveFilter("")
			const {data} = await api("/cars");
			setAllCars(data)
		}
		else {
			setActiveFilter(name);
			setAllCars(allCars!.filter(car => car.model.toLocaleLowerCase().includes(name.toLocaleLowerCase())));
		  }
	}

	const handleYearFilter = async (year: string) =>{
		if (activeFilter === year) {
			setActiveFilter("")
			const {data} = await api("/cars");
			setAllCars(data)
		}
		else {
			setActiveFilter(year);
			setAllCars(allCars!.filter(car => car.year === year));
		  }
	}


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
									setBrandName(name);
									setStatusBrandFilter(!statusBrandFilter);
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
								onClick={(e) => handleModelFilter(name)}>
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
								onClick={(e) => handleColorFilter(color)}>
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
								onClick={(e) => handleYearFilter(name)}>
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
								<Button p="0" height="100%" justifyContent="flex-start" {...acTextConfig} key={name}>
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
