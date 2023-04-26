import { Flex, VStack, useColorModeValue } from "@chakra-ui/react";

import { mandatoryChildren } from "../../types/childrenProps";

const ContainerForm = ({ children }: mandatoryChildren) => {
	const fBG = useColorModeValue("white", "grey.2");
	const vBG = useColorModeValue("gray.100", "grey.1");

	return (
		<VStack
			minH="100vh"
			pt="60px"
			px={{ base: "16px", xs: "22px", lg: "28px" }}
			flex="flex"
			justifyContent="center"
			alignContent="center"
			bg={vBG}
		>
			<Flex
				bg={fBG}
				my="32px"
				py="40px"
				px="28px"
				gap="10px"
				borderRadius="4px"
				w={{ base: "full", xs: "300px", lg: "410px" }}
				justifyContent="center"
			>
				{children}
			</Flex>
		</VStack>
	);
};

export default ContainerForm;
