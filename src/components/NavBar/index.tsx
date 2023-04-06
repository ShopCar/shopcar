import { ChevronRightIcon } from "@chakra-ui/icons";
import {
	Box,
	Flex,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	useColorModeValue
} from "@chakra-ui/react";
import ThemeSelector from "../ThemeSelector";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";

const NavBar = () => {
	const to = useLocation();
	const resolvedPath = useResolvedPath(to.pathname);
	const isActive = useMatch({ path: resolvedPath.pathname, end: true })?.pattern
		.end;

	return (
		<>
			<Box>
				<Flex
					position="relative"
					minH={"60px"}
					py={{ base: 2 }}
					px={{ base: 4 }}
					align={"center"}
					borderBottom={1}
					borderStyle={"solid"}
					bg={useColorModeValue("white", "gray.800")}
					color={useColorModeValue("gray.600", "white")}
					borderColor={useColorModeValue("gray.200", "gray.900")}
				>
					<ThemeSelector />
					<Breadcrumb
						spacing="8px"
						separator={<ChevronRightIcon color="gray.500" />}
					>
						<BreadcrumbItem>
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
