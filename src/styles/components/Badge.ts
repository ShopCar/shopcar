import { defineStyle, ComponentStyleConfig } from "@chakra-ui/react";

const solid = defineStyle({
	bg: "brand.1",
	border: "none",
	color: "white"
});

const negative = defineStyle({
	bg: "grey.4",
	border: "none",
	color: "white"
});

const opacity = defineStyle({
	bg: "brand.4",
	border: "none",
	color: "brand.1",
	borderRadius: "4px"
});

const Badge: ComponentStyleConfig = {
	baseStyle: {
		px: "8px",
		fontSize: "14px",
		lineHeight: "24px",
		fontWeight: "medium",
		textTransform: "Capitalize"
	},
	variants: {
		solid,
		opacity,
		negative
	},
	defaultProps: {
		variant: "solid"
	}
};

export default Badge;
