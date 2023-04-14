import { mode } from "@chakra-ui/theme-tools";
import { ComponentStyleConfig, SystemStyleObject } from "@chakra-ui/react";

const outline = (props: SystemStyleObject) => ({
	field: {
		_placeholder: {
			color: "grey.3",
			fontSize: "16px",
			fontWeight: "normal"
		},
		borderColor: "grey.7",
		bg: "grey.9",
		_hover: {
			bg: mode("grey.8", "grey.6")(props)
		},
		_focus: {
			borderColor: "brand.2",
			bg: mode("grey.9", "grey.6")(props)
		},
		_invalid: {
			borderColor: "feedback.alert1"
		}
	}
});

const Input: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "4px"
	},
	sizes: {},
	variants: {
		outline
	},
	defaultProps: {
		size: "1",
		variant: "outline"
	}
};

export default Input;
