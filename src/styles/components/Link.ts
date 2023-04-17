import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";

const standard = defineStyle({
	color: "grey.2",
	fontSize: "16px",
	fontWeight: "semibold",
	_dark: {
		color: "grey.10"
	},
	_hover: {
		color: "brand.1!important",
		textDecoration: "none",
		transition: "all 0.2 easy-in-out"
	}
});

const outline = defineStyle({
	minW: "133px",
	maxW: "19rem",
	h: "42px",
	py: "8px",
	color: "grey.0",
	fontSize: "16px",
	textAlign: "center",
	fontWeight: "semibold",
	border: "1.5px solid",
	borderColor: "grey.4",
	borderRadius: "4px",
	_hover: {
		bg: "grey.1",
		color: "grey.10!important",
		textDecoration: "none",
		_dark: {
			bg: "grey.0",
			borderColor: "grey.0"
		}
	},
	_dark: {
		color: "grey.10"
	}
});

const Link: ComponentStyleConfig = {
	baseStyle: {},
	variants: {
		default: { ...standard },
		outline
	},
	defaultProps: {
		variant: "default"
	}
};

export default Link;
