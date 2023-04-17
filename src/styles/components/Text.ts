import { ComponentStyleConfig } from "@chakra-ui/react";

const Text: ComponentStyleConfig = {
	sizes: {
		1: {
			fontSize: "16px",
			lineHeight: "28px"
		},
		2: {
			fontSize: "14px",
			lineHeight: "24px"
		}
	},
	variants: {
		600: {
			fontWeight: "semibold"
		},
		500: {
			fontWeight: "medium"
		},
		400: {
			fontWeight: "normal"
		}
	},
	defaultProps: {
		size: "1",
		variant: "400"
	}
};

export default Text;
