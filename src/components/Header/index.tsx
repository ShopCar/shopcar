import { Flex } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

import Logo from "../Logo";
import NavBar from "../NavBar";

const Header = () => {
	const px = {
		base: "16px",
		md: "30px",
		xl: "60px"
	};

	return (
		<>
			<Flex
				as="header"
				w="full"
				h="60px"
				px={px}
				align="center"
				zIndex="sticky"
				position="fixed"
				justifyContent="center"
				borderBottom="1px solid"
				borderColor={useColorModeValue("grey.7", "grey.2")}
				bg={useColorModeValue("grey.10", "grey.1")}
			>
				<Logo />
				<NavBar />
			</Flex>
		</>
	);
};

export default Header;
