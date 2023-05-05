import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
	Box,
	IconButton,
	useColorMode,
	useColorModeValue
} from "@chakra-ui/react";

const ThemeSelector = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	const icHover = {
		_hover: {
			bg: useColorModeValue("grey.6", "brand.1"),
			color: "grey.10"
		}
	};
	const icColor = useColorModeValue("grey.1", "grey.10");

	return (
		<Box textAlign="center">
			<IconButton
				size="sm"
				bg="transparent"
				aria-label="mode"
				onClick={toggleColorMode}
				transition="all 0.5s ease-out"
				{...icHover}
				icon={
					colorMode === "light" ? (
						<MoonIcon color={icColor} />
					) : (
						<SunIcon color={icColor} />
					)
				}
			/>
		</Box>
	);
};

export default ThemeSelector;
