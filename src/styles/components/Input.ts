import { mode } from "@chakra-ui/theme-tools";
import { ComponentStyleConfig, SystemStyleObject } from "@chakra-ui/react";

const standardStyle = {
	color: "grey.3",
	fontSize: "16px"
};

const outline = (props: SystemStyleObject) => ({
	field: {
		_placeholder: {
			...standardStyle,
			fontWeight: "normal"
		},
		borderColor: "grey.7",
		bg: "grey.3",
		_hover: {
			bg: mode("grey.8", "grey.2")(props)
		},
		_focus: {
			color: mode("grey.1", "grey.9")(props),
			borderColor: "brand.2",
			bg: mode("grey.8", "grey.2")(props)
		},
		_invalid: {
			borderColor: "feedback.alert1"
		}
	}
});

const filled = (props: SystemStyleObject) => ({
	field: {
		_placeholder: {
			...standardStyle,
			fontWeight: "semibold"
		},
		borderColor: "grey.5",
		bg: "grey.5",
		_hover: {
			bg: "grey.6"
		},
		_focus: {
			borderColor: "brand.2",
			bg: "grey.6",
			_dark: {
				borderColor: "brand.1"
			}
		},
		_invalid: {
			borderColor: "feedback.alert1"
		}
	}
});

const Input: ComponentStyleConfig = {
	baseStyle: {
		transition: "all 0.5s ease-out",
		borderRadius: "4px"
	},
	sizes: {},
	variants: {
		outline,
		filled
	},
	defaultProps: {
		size: "1",
		variant: "outline"
	}
};

export default Input;
