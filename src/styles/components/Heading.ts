import { mode } from "@chakra-ui/theme-tools";
import { ComponentStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

export const Heading: ComponentStyleConfig = {
	baseStyle: (props: StyleFunctionProps) => ({
		color: mode("grey.1", "grey.10")(props)
	}),
	sizes: {
		1: {
			fontSize: "44px",
			lineHeight: "56px"
		},
		2: {
			fontSize: "36px",
			lineHeight: "45px"
		},
		3: {
			fontSize: "32px",
			lineHeight: "40px"
		},
		4: {
			fontSize: "32px",
			lineHeight: "40px"
		},
		5: {
			fontSize: "28px",
			lineHeight: "35px"
		},
		6: {
			fontSize: "20px",
			lineHeight: "25px"
		},
		7: {
			fontSize: "16px",
			lineHeight: "20px"
		}
	},
	variants: {
		700: {
			fontWeight: "bold"
		},
		600: {
			fontWeight: "semibold"
		},
		500: {
			fontWeight: "medium"
		}
	},
	defaultProps: {
		size: "1",
		variant: "700"
	}
};
