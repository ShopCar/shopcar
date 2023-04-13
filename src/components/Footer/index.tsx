import {
	Box,
	Container,
	Flex,
	Image,
	Stack,
	Text,
	useColorModeValue
} from "@chakra-ui/react";

import whiteLogo from "../../assets/logoW.png";
import ScrollToTop from "../ScrollToTop";

const Footer = () => {
	return (
		<>
			<Box bg="grey.0">
				<Flex px="60px" align="center" justifyContent="flex-start">
					<Box py="16px">
						<Image
							objectFit="cover"
							src={whiteLogo}
							alt="ShopCar Logo"
							title="ShopCar"
							h="50px"
						/>
					</Box>
					<Flex justifyContent="center" w="full">
						<Text size="2" variant="400" color="white">
							© 2023 ShopCar. All rights reserved
						</Text>
					</Flex>
				</Flex>
			</Box>
			<ScrollToTop />
		</>
	);
};

export default Footer;
