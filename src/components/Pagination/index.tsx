import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, Text, useColorModeValue } from "@chakra-ui/react";

import { iPaginationProps } from "../../types/compoments";

const Pagination = ({
	totalPage,
	currentPage,
	setCurrentPage
}: iPaginationProps) => {
	const prevPage = () => {
		if (currentPage !== 1) {
			setCurrentPage(currentPage - 1);
		}
	};

	const nextPage = () => {
		if (currentPage !== totalPage) {
			setCurrentPage(currentPage + 1);
		}
	};

	const btnColor = useColorModeValue("brand.2", "grey.10");

	return (
		<>
			<Box
				display="flex"
				justifyContent="center"
				h="3rem"
				gap="0.5rem"
				pb="4rem"
			>
				{currentPage > 1 ? (
					<Button
						color={btnColor}
						textDecoration="none!important"
						_hover={{ color: "brand.1" }}
						onClick={prevPage}
					>
						<ChevronLeftIcon /> Anterior
					</Button>
				) : null}

				<Flex gap="4px" align="center">
					<Text size="1" variant="600" color="grey.2">
						{currentPage}
					</Text>
					<Text size="1" variant="600" color="grey.3">
						de {totalPage}
					</Text>
				</Flex>
				{totalPage > currentPage ? (
					<Button
						color={btnColor}
						textDecoration="none!important"
						_hover={{ color: "brand.1" }}
						onClick={nextPage}
					>
						Seguinte <ChevronRightIcon />
					</Button>
				) : null}
			</Box>
		</>
	);
};

export default Pagination;
