import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import whiteLogo from "../../assets/logoW.png";
import defaultLogo from "../../assets/logoP.png";

const Logo = () => {
	const { colorMode } = useColorMode();

	return (
		<Box py="16px">
			<Image
				src={colorMode == "dark" ? whiteLogo : defaultLogo}
				h="45px"
				alt="ShopCar Logo"
				title="ShopCar"
			/>
		</Box>
	);
};

export default Logo;
