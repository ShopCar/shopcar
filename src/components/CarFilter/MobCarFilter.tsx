import {
	Flex,
	Button,
	Popover,
	PopoverBody,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue
} from "@chakra-ui/react";
import { ChevronDownIcon, SmallCloseIcon } from "@chakra-ui/icons";

import BaseFilter from "./BaseFilter";

const MobCarFilter = () => {
	const mobFlex = {
		base: "flex",
		lg: "none"
	};

	const bgColor = useColorModeValue("grey.10", "grey.1");
	const colorText = useColorModeValue("grey.1", "grey.10");

	return (
		<Flex display={mobFlex} w="15rem">
			<Popover closeOnBlur={false} placement="bottom" isLazy>
				{({ isOpen }) => (
					<>
						<PopoverTrigger>
							<Button
								h="2.5rem"
								w="15rem"
								color={colorText}
								borderRadius="none"
								alignContent="center"
								justifyContent="space-between"
								textDecoration="none!important"
							>
								Filtro
								{isOpen ? (
									<SmallCloseIcon boxSize="6" color="grey.4" />
								) : (
									<ChevronDownIcon boxSize="8" color="grey.4" />
								)}
							</Button>
						</PopoverTrigger>
						<PopoverContent
							w="inherit"
							top="-10px"
							pt="0.25rem"
							border="none"
							bg={bgColor}
						>
							<PopoverBody w="inherit" p="0">
								<BaseFilter />
							</PopoverBody>
						</PopoverContent>
					</>
				)}
			</Popover>
		</Flex>
	);
};

export default MobCarFilter;
