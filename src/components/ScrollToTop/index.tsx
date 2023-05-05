import { ChevronUpIcon } from "@chakra-ui/icons";
import { IconButton, useColorModeValue } from "@chakra-ui/react";

import { useGlobalContext } from "../../contexts/globalContext";

const ScrollToTop = () => {
	const { isVisible } = useGlobalContext();

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};

	const bottom = {
		base: "90px",
		ss: "80px",
		md: "33px"
	};
	const right = {
		base: "16px",
		md: "30px",
		xl: "60px"
	};
	const bgColor = useColorModeValue("grey.1", "grey.2");

	return (
		<>
			{isVisible && (
				<IconButton
					size="sm"
					bg={bgColor}
					right={right}
					fontSize="xl"
					color="white"
					bottom={bottom}
					variant="solid"
					position="fixed"
					zIndex="tooltip"
					onClick={scrollToTop}
					icon={<ChevronUpIcon />}
					aria-label="scroll to top"
					_hover={{ bg: "brand.1" }}
					transition="all 0.5s ease-out"
				/>
			)}
		</>
	);
};

export default ScrollToTop;
