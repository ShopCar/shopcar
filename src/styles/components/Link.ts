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

const brand1 = defineStyle({
	bg: "brand.1",
	p: "3px 0",
	w: "110px",
	fontSize: "16px",
	textAlign: "center",
	borderRadius: "4px",
	color: "white",
	_hover: {
		bg: "brand.2",
		textDecoration: "none"
	},
	_activeLink: {
		bg: "brand.2",
		textDecoration: "none"
	}
});

const solidGrey = defineStyle({
	bg: "grey.0",
	color: "white",
	h: "42px",
	p: "8px",
	maxW: "100%",
	fontSize: "16px",
	borderRadius: "4px",
	fontWeight: "semibold",
	_hover: {
		bg: "grey.1",
		textDecoration: "none"
	},
	_activeLink: {
		bg: "grey.1",
		textDecoration: "none"
	}
});

const Link: ComponentStyleConfig = {
	baseStyle: {
		transition: "all 0.5s ease-out"
	},
	variants: {
		standard,
		outline,
		brand1,
		solidGrey
	},
	defaultProps: {
		variant: "standard"
	}
};

export default Link;
