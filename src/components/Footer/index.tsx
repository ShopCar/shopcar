import { Box, Flex, Image, Text } from "@chakra-ui/react";

import ScrollToTop from "../ScrollToTop";

import whiteLogo from "../../assets/logoW.png";

const Footer = () => {
	const hFlex = {
		xs: "210px",
		sm: "210px",
		md: "100px",
		xl: "100px",
		"2xl": "100px"
	};

	const pxFlex = {
		xs: "16px",
		sm: "16px",
		md: "30px",
		xl: "60px",
		"2xl": "60px"
	};

	return (
		<>
			<Box bg="grey.0">
				<Flex
					h={hFlex}
					px={pxFlex}
					align="center"
					justifyContent="space-evenly"
					flexDirection={{
						xs: "column",
						sm: "column",
						md: "row",
						xl: "row",
						"2xl": "row"
					}}
				>
					<Box>
						<Image
							objectFit="cover"
							src={whiteLogo}
							alt="ShopCar Logo"
							title="ShopCar"
							h="60px"
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
