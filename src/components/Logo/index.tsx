import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";
import { useColorMode } from "@chakra-ui/color-mode";

import whiteLogo from "../../assets/logoW.png";
import defaultLogo from "../../assets/logoP.png";

import NavLink from "../NavLink";

const Logo = () => {
	const { colorMode } = useColorMode();

	return (
		<Box>
			<NavLink path="/" type="router">
				<Image
					objectFit="contain"
					src={colorMode == "dark" ? whiteLogo : defaultLogo}
					h="50px"
					alt="ShopCar Logo"
					title="ShopCar"
				/>
			</NavLink>
		</Box>
	);
};

export default Logo;
