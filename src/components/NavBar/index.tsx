import { Box, Flex, Divider } from "@chakra-ui/react";

import DefaultNav from "./DefaultNav";
import ThemeSelector from "../ThemeSelector";

const NavBar = () => {
	return (
		<>
			<Box w="full" overflow="hidden">
				<Flex
					h="60px"
					w="full"
					gap="16px"
					align="center"
					justifyContent="flex-end"
				>
					<Divider orientation="vertical" />

					<DefaultNav />

					<ThemeSelector />
				</Flex>
			</Box>
		</>
	);
};

export default NavBar;
