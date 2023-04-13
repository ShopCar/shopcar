import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, IconButton, useColorMode } from "@chakra-ui/react";

const ThemeSelector = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box textAlign="center">
			<IconButton
				size="sm"
				aria-label="mode"
				icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
				onClick={toggleColorMode}
				variant="ghost"
			/>
		</Box>
	);
};

export default ThemeSelector;
