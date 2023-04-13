import { ThemeConfig } from "@chakra-ui/theme";
import { extendTheme } from "@chakra-ui/theme-utils";

import styles from "./styles";
import fonts from "../foundations/fonts";
import colors from "../foundations/colors";
import breakpoints from "../foundations/breakpoints";

import components from "../components";

const config: ThemeConfig = {
	initialColorMode: "light",
	useSystemColorMode: false
};

const customTheme = extendTheme({
	config,
	colors,
	fonts,
	styles,
	breakpoints,
	components
});

export default customTheme;
