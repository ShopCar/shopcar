import { mode } from "@chakra-ui/theme-tools";
import { ComponentStyleConfig, StyleFunctionProps } from "@chakra-ui/react";

const standard = (props: StyleFunctionProps) => ({
	bg: mode("grey.0", "grey.5")(props),
	color: mode("white", "grey.0")(props),
	_hover: {
		bg: mode("grey.1", "grey.5")(props)
	}
});

const negative = (props: StyleFunctionProps) => ({
	bg: mode("grey.6", "grey.8")(props),
	color: mode("grey.2", "grey.0")(props),
	_hover: {
		bg: "grey.5"
	}
});

const disable = (props: StyleFunctionProps) => ({
	bg: mode("grey.5", "grey.8")(props),
	color: mode("white", "grey.4")(props),
	cursor: "not-allowed"
});

const brand1 = (props: StyleFunctionProps) => ({
	bg: "brand.1",
	color: "white",
	_hover: {
		bg: "brand.2"
	}
});

const brandOpacity = (props: StyleFunctionProps) => ({
	bg: "brand.4",
	color: "brand.1",
	_hover: {
		bg: "grey.10",
		color: "grey.1"
	}
});

const outlineLight = (props: StyleFunctionProps) => ({
	bg: "grey.10",
	color: "grey.10",
	_hover: {
		color: "grey.1"
	}
});

const outline1 = (props: StyleFunctionProps) => ({
	variant: "outiline",
	border: "1.5px solid",
	borderColor: "grey.0",
	color: "grey.0",
	_hover: {
		bg: "grey.1",
		color: "grey.10"
	}
});

const outline2 = (props: StyleFunctionProps) => ({
	variant: "outiline",
	border: "1.5px solid",
	borderColor: "grey.4",
	color: "grey.0",
	_hover: {
		bg: "grey.1",
		color: "grey.10"
	}
});

const outlineBrand1 = (props: StyleFunctionProps) => ({
	variant: "outiline",
	border: "1.5px solid",
	borderColor: "brand.1",
	color: "brand.1",
	_hover: {
		bg: "brand.4",
		color: "brand.1"
	}
});

const link = (props: StyleFunctionProps) => ({
	variant: "ghost",
	color: "grey.0",
	_hover: {
		bg: "grey.8"
	}
});

const alert = (props: StyleFunctionProps) => ({
	bg: "feedback.alert3",
	color: "feedback.alert1",
	_hover: {
		bg: "feedback.alert2"
	}
});

const sucess = (props: StyleFunctionProps) => ({
	bg: "feedback.sucess3",
	color: "feedback.sucess1",
	_hover: {
		bg: "feedback.sucess2"
	}
});

const brandDisable = (props: StyleFunctionProps) => ({
	bg: "brand.3",
	color: "brand.4",
	cursor: "not-allowed"
});

const Button: ComponentStyleConfig = {
	baseStyle: {
		borderRadius: "4px",
		fontWeight: "semibold"
	},

	sizes: {
		1: {
			h: "38px",
			w: { xs: "100px", sm: "100px", md: "108px", lg: "108px", "2xl": "108px" }
		},
		2: {
			h: "48px",
			w: "146px",
			fontSize: "16px"
		},
		medium: {
			h: "38px",
			w: "119px",
			fontSize: "14px"
		},
		small: {
			h: "32px",
			w: "90px",
			fontSize: "14px"
		}
	},

	variants: {
		link,
		alert,
		brand1,
		sucess,
		disable,
		negative,
		outline1,
		outline2,
		brandOpacity,
		outlineLight,
		outlineBrand1,
		brandDisable,
		default: { ...standard }
	},

	defaultProps: {
		size: "big",
		variant: "default"
	}
};

export default Button;
