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

import cars from "../../data/apiCarsData";

const BaseFilter = () => {
	const years = [...new Set(cars.map(car => car.year))];
	const brands = [...new Set(cars.map(car => car.brand))];
	const fuels = [...new Set(cars.map(car => car.fuelType))];
	const colors = ["Azul", "Branca", "Cinza", "Prata", "Preta", "Verde"];
	const models = cars.map(car => car.model.split(" ").slice(0, 2).join(" "));

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
				<Accordion {...accordionConfig}>
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Marca
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{brands.map(name => (
								<Text {...acTextConfig} key={name}>
									{name}
								</Text>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Modelo
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{models.map(name => (
								<Text {...acTextConfig} key={name}>
									{name}
								</Text>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Cor
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{colors.map(color => (
								<Text {...acTextConfig} key={color}>
									{color}
								</Text>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Ano
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{years.map(name => (
								<Text {...acTextConfig} key={name}>
									{name}
								</Text>
							))}
						</AccordionPanel>
					</AccordionItem>
				</Accordion>

				<Accordion {...accordionConfig}>
					<AccordionItem {...acItemConfig}>
						<AccordionButton {...acButtonConfig}>
							Combustível
							<AccordionIcon {...acIconConfig} />
						</AccordionButton>
						<AccordionPanel>
							{fuels.map(name => (
								<Text {...acTextConfig} key={name}>
									{name}
								</Text>
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
