import { Link } from "react-router-dom";

import {
	Box,
	Flex,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink
} from "@chakra-ui/react";
import { ChevronRightIcon } from "@chakra-ui/icons";

import ThemeSelector from "../ThemeSelector";

const NavBar = () => {
	return (
		<>
			<Box w="full">
				<Flex h="60px" w="full" gap="16px" py={{ base: 2 }} align={"center"}>
					<Breadcrumb
						w="full"
						alignItems="center"
						spacing="8px"
						separator={<ChevronRightIcon color="gray.500" />}
					>
						<BreadcrumbItem justifyContent="flex-end">
							<BreadcrumbLink as={Link} to="/">
								Home
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink as={Link} to="/login">
								Login
							</BreadcrumbLink>
						</BreadcrumbItem>

						<BreadcrumbItem>
							<BreadcrumbLink as={Link} to="/register">
								Cadastro
							</BreadcrumbLink>
						</BreadcrumbItem>
					</Breadcrumb>
					<ThemeSelector />
				</Flex>
			</Box>
		</>
	);
};

export default NavBar;
/*
isCurrentPage={isActive}
color={isActive ? "blue.500" : ""}
*/
