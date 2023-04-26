import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Flex,
	VStack,
	Divider,
	Popover,
	IconButton,
	PopoverBody,
	useDisclosure,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue
} from "@chakra-ui/react";

import NavLink from "../NavLink";

const MobileNav = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	const dpFlex = ["flex", "flex", "flex", "flex", "none", "none", "none"];

	const pcBC = useColorModeValue("grey.7", "grey.2");
	const pcBG = useColorModeValue("grey.10", "grey.1");

	return (
		<Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} isLazy={true}>
			<PopoverTrigger>
				<IconButton
					aria-label="Abrir menu"
					size="sm"
					icon={
						isOpen ? <CloseIcon boxSize={4} /> : <HamburgerIcon boxSize={5} />
					}
					display={dpFlex}
				/>
			</PopoverTrigger>
			<PopoverContent
				w="16rem"
				mt="6px"
				py="6"
				borderRadius="none"
				borderTop="none"
				borderTopColor={pcBC}
				backgroundColor={pcBG}
			>
				<PopoverBody>
					<Flex gap="8" h="min-content" flexDirection="column">
						<NavLink path="cars" type="section">
							Carros
						</NavLink>
						<NavLink path="auction" type="section">
							Leilão
						</NavLink>

						<Divider />

						<NavLink path="/login" type="router">
							Fazer Login
						</NavLink>

						<NavLink path="/register" type="router" variant="outline">
							Cadastrar
						</NavLink>
					</Flex>
				</PopoverBody>
			</PopoverContent>
		</Popover>
	);
};

export default MobileNav;
