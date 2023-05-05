import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";

const outline = defineStyle({
	borderColor: "grey.7",
	transition: "all 0.5s ease-out",
	_hover: {
		backgroundColor: "grey.8"
	},
	_focus: {
		borderColor: "brand.2",
		bg: "grey.9",
		_dark: {
			bg: "grey.6"
		}
	},
	_invalid: {
		borderColor: "feedback.alert1"
	},
	_placeholder: {
		color: "grey.3",
		fontSize: "16px",
		fontWeight: "normal"
	}
});

const Textarea: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "4px"
	},
	sizes: {},
	variants: {
		outline
	},
	defaultProps: {
		size: "",
		variant: "outline"
	}
};

export default Textarea;
