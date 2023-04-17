import { useColorMode } from "@chakra-ui/color-mode";
import { Box } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/image";

import whiteLogo from "../../assets/logoW.png";
import defaultLogo from "../../assets/logoP.png";
import NavLink from "../NavLink";

const Logo = () => {
	const { colorMode } = useColorMode();

	return (
		<Box py="16px">
			<NavLink path="/" type="router">
				<Image
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
