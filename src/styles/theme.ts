import { ThemeConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/theme-utils";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false
};

const styles = {};

const colors = {};

const fonts = {};

const customTheme = extendTheme({ config, colors, fonts, styles });

export default customTheme;
