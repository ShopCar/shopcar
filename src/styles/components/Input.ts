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
		bg: "grey.9",
		transition: "all 0.5s ease-out",
		_hover: {
			bg: mode("grey.8", "grey.6")(props)
		},
		_focus: {
			borderColor: "brand.2",
			bg: mode("grey.9", "grey.6")(props),
			_dark: {
				borderColor: "brand.1"
			}
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
		transition: "all 0.5s ease-out",
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
