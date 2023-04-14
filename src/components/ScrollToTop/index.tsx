import { useEffect, useState } from "react";

import { ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton, useColorModeValue } from "@chakra-ui/react";

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		const toggleVisibility = () => {
			if (window.pageYOffset > 100) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		window.addEventListener("scroll", toggleVisibility);

		return () => window.removeEventListener("scroll", toggleVisibility);
	}, []);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const bottom = {
		xs: "123px",
		sm: "123px",
		md: "33px",
		xl: "28px",
		"2xl": "28px"
	};

	const right = {
		xs: "16px",
		sm: "16px",
		md: "30px",
		xl: "60px",
		"2xl": "60px"
	};

	return (
		<>
			{isVisible && (
				<IconButton
					aria-label="scroll to top"
					icon={<ChevronUpIcon />}
					size="sm"
					fontSize="xl"
					color="white"
					bg={useColorModeValue("grey.1", "grey.2")}
					_hover={{ bg: "brand.1" }}
					variant="solid"
					onClick={scrollToTop}
					position="fixed"
					bottom={bottom}
					right={right}
					zIndex="3"
				/>
			)}
		</>
	);
}
