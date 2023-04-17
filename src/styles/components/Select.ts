import { selectAnatomy } from "@chakra-ui/anatomy";
import {
	ComponentStyleConfig,
	createMultiStyleConfigHelpers
} from "@chakra-ui/react";

const { definePartsStyle } = createMultiStyleConfigHelpers(selectAnatomy.keys);

const outline = definePartsStyle({
	field: {
		color: "grey.3",
		bg: "transparent",
		border: "1.5px solid",
		borderColor: "grey.7!important",
		_hover: {
			backgroundColor: "grey.8",
			borderColor: "brand.2!important"
		},
		_focus: {
			borderColor: "brand.2!important"
		},
		_invalid: {
			borderColor: "feedback.alert1!important"
		}
	},
	icon: {
		color: "grey.3",
		fontSize: "20px",
		_focus: {
			color: "brand.2!important"
		}
	}
});

const Select: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "4px"
	},
	sizes: {},
	variants: {
		outline
	},
	defaultProps: {
		variant: "outline"
	}
};

export default Select;
