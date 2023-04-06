import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";

const ThemeSelector = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box textAlign="right" position="absolute" top="2" right="4">
			<IconButton
				aria-label="mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				variant="ghost"
			/>
		</Box>
	);
};

export default ThemeSelector;
