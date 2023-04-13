import { mode } from "@chakra-ui/theme-tools";
import {
	ComponentStyleConfig,
	StyleFunctionProps,
	SystemStyleObject
} from "@chakra-ui/react";

const Input: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "4px"
	},
	sizes: {
		lg: {}
	},
	variants: {
		outline: (props: SystemStyleObject) => ({
			field: {
				_placeholder: {
					color: "grey.3"
				},
				borderColor: "grey.7",
				bg: "grey.9",
				_hover: {
					bg: mode("grey.8", "grey.6")(props)
				},
				_focus: {
					color: "grey.1",
					borderColor: "brand.2",
					bg: mode("grey.9", "grey.6")(props)
				},
				_invalid: {
					borderColor: "feedback.alert1"
				}
			}
		})
	},
	defaultProps: {
		size: "1",
		variant: "outline"
	}
};

export default Input;
