import {
	Box,
	Container,
	Stack,
	Text,
	useColorModeValue
} from "@chakra-ui/react";

const Footer = () => {
	return (
		<>
			<Box
				borderTop={1}
				borderStyle={"solid"}
				bg={useColorModeValue("white", "gray.800")}
				color={useColorModeValue("gray.600", "white")}
				borderColor={useColorModeValue("gray.200", "gray.900")}
			>
				<Container
					as={Stack}
					maxW={"6xl"}
					py={4}
					spacing={4}
					centerContent={true}
				>
					<Text>© 2023 ShopCar. All rights reserved</Text>
				</Container>
			</Box>
		</>
	);
};

export default Footer;
