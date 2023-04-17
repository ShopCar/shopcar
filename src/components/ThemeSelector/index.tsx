import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Box,
	IconButton,
	useColorMode,
	useColorModeValue
} from "@chakra-ui/react";

const ThemeSelector = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box textAlign="center">
			<IconButton
				size="sm"
				variant="ghost"
				aria-label="mode"
				onClick={toggleColorMode}
				transition="all 0.5s ease-out"
				_hover={{
					bg: "brand.1",
					color: "grey.10"
				}}
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
			/>
		</Box>
	);
};

export default ThemeSelector;
