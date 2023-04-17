import {
	Flex,
	VStack,
	Button,
	Heading,
	useColorModeValue,
	Grid,
	GridItem,
	Text,
	Box
} from "@chakra-ui/react";

import apiCars from "../../data/apiCarsData";
import property from "../../data/cardCarData";

import Banner from "../../components/Banner";
import CarFilter from "../../components/CarFilter";
import ProductCard from "../../components/ProductCard";
import NavLink from "../../components/NavLink";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

const Home = () => {
	const pxFlex = {
		base: "16px",
		md: "30px",
		xl: "60px"
	};

	const justifyFlex = { base: "center", sm: "flex-start" };

	return (
		<VStack minH="100vh" pt="60px">
			<Banner />
			<Grid
				templateColumns="repeat(7, 1fr)"
				w="full"
				mt="2rem!important"
				gap="1.5rem"
			>
				<GridItem
					as="aside"
					colSpan={{ base: 6, lg: 1 }}
					minHeight={{ lg: "100vh" }}
					pl={pxFlex}
				>
					<CarFilter />
				</GridItem>

				<GridItem
					as="main"
					colSpan={{ base: 7, lg: 6 }}
					minHeight="100vh"
					mr="2.5rem"
					ml={{ base: "36px" }}
				>
					<Flex
						w="full"
						pb="4rem"
						wrap="wrap"
						justifyContent={justifyFlex}
						gap={{ base: "1.75rem", lg: "2.25rem" }}
					>
						{apiCars.map((_, index) => (
							<ProductCard {...property} key={index} />
						))}
					</Flex>

					<Box
						display="flex"
						justifyContent="center"
						h="3rem"
						gap="0.5rem"
						pb="4rem"
					>
						<Button
							color={useColorModeValue("brand.2", "grey.10")}
							textDecoration="none!important"
							_hover={{ color: "brand.1" }}
						>
							<ChevronLeftIcon /> Anterior
						</Button>
						<Flex gap="4px" align="center">
							<Text size="1" variant="600" color="grey.2">
								1{" "}
							</Text>
							<Text size="1" variant="600" color="grey.3">
								de 2
							</Text>
						</Flex>
						<Button
							color={useColorModeValue("brand.2", "grey.10")}
							textDecoration="none!important"
							_hover={{ color: "brand.1" }}
						>
							Seguinte <ChevronRightIcon />
						</Button>
					</Box>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default Home;
