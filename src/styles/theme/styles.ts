import { mode } from "@chakra-ui/theme-tools";
import { StyleFunctionProps, theme as base } from "@chakra-ui/react";

const styles = {
	global: (props: StyleFunctionProps) => ({
		"html, body": {
			color: mode("grey.2", "grey.10")(props),
			bg: mode("grey.10", "grey.1")(props)
		}
	})
};

export default styles;
