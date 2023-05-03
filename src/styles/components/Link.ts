import { ComponentStyleConfig, defineStyle } from "@chakra-ui/react";

const standard = defineStyle({
	color: "grey.2",
	fontSize: "16px",
	fontWeight: "semibold",
	transition: "all 0.5s ease-out",
	_dark: {
		color: "grey.10"
	},
	_hover: {
		color: "brand.1!important",
		textDecoration: "none",
		_dark: {
			color: "brand.3!important"
		}
	},
	_activeLink: {
		color: "brand.1!important",
		_dark: {
			color: "brand.3!important"
		}
	}
});

const outline = defineStyle({
	h: "42px",
	py: "8px",
	maxW: "100%",
	minW: "115px",
	color: "grey.0",
	fontSize: "16px",
	textAlign: "center",
	borderRadius: "4px",
	border: "1.5px solid",
	borderColor: "grey.4",
	fontWeight: "semibold",
	transition: "all 0.5s ease-out",
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
	},
	_activeLink: {
		bg: "grey.1",
		color: "grey.10!important",
		textDecoration: "none",
		_dark: {
			bg: "grey.0",
			borderColor: "grey.0"
		}
	}
});

const Link: ComponentStyleConfig = {
	baseStyle: {},
	variants: {
		standard,
		outline
	},
	defaultProps: {
		variant: "standard"
	}
};

export default Link;
