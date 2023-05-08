import { useEffect, useState } from "react";
import { Flex, Grid, VStack, GridItem } from "@chakra-ui/react";

import api from "../../services/api";
import { useCarContext } from "../../contexts/carContext";
import { useGlobalContext } from "../../contexts/globalContext";

import Banner from "../../components/Banner";
import CarFilter from "../../components/CarFilter";
import Pagination from "../../components/Pagination";
import ProductCard from "../../components/ProductCard";

const Home = () => {
	const pxFlex = {
		base: "16px",
		md: "30px",
		xl: "60px"
	};
	const { windowSize } = useGlobalContext();
	const { allCars, setAllCars, setBrands, getCarsBrands, filteredCars } =
		useCarContext();

	useEffect(() => {
		const getInicialData = async () => {
			const { data } = await api("/cars");
			setAllCars(data);
			setBrands(await getCarsBrands());
			console.log(data);
		};
		getInicialData();
	}, []);

	const justifyFlex = { base: "center", sm: "flex-start" };

	const itemsPerPage =
		windowSize.innerWidth < 539 ? 4 : windowSize.innerWidth > 911 ? 12 : 6;
	const [currentPage, setCurrentPage] = useState(1);
	const endIndex = currentPage * itemsPerPage;
	const startIndex = endIndex - itemsPerPage;
	const items = filteredCars?.length
		? filteredCars.slice(startIndex, endIndex)
		: allCars?.slice(startIndex, endIndex);
	const totalList = filteredCars?.length
		? filteredCars.length == 0
			? 1
			: filteredCars.length
		: allCars?.length == 0
		? 1
		: allCars?.length;
	const totalPage = totalList ? Math.ceil(totalList / itemsPerPage) : 0;

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
						{items?.map(item => (
							<ProductCard
								owner={{ name: item.user.name, id: item.user.id }}
								padding="3rem 0 0 0"
								id={item.id}
								km={item.km}
								year={Number(item.year)}
								imageUrl={item.images.cover}
								imageAlt={item.model}
								carTitle={item.model}
								carDescription={
									item.description ? item.description : "Anúncio sem descrição"
								}
								formattedPrice={Number(item.price).toLocaleString("pt-br", {
									style: "currency",
									currency: "BRL"
								})}
								key={item.id}
							/>
						))}
					</Flex>
					<Pagination
						totalPage={totalPage}
						currentPage={currentPage}
						setCurrentPage={setCurrentPage}
					/>
				</GridItem>
			</Grid>
		</VStack>
	);
};

export default Home;
