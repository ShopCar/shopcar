import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
	Flex,
	Popover,
	IconButton,
	PopoverBody,
	useDisclosure,
	PopoverTrigger,
	PopoverContent,
	useColorModeValue,
	Divider
} from "@chakra-ui/react";

import NavLink from "../NavLink";

const MobileNav = () => {
	const { isOpen, onClose, onOpen } = useDisclosure();

	return (
		<Popover isOpen={isOpen} onOpen={onOpen} onClose={onClose} isLazy={true}>
			<PopoverTrigger>
				<IconButton
					aria-label="Abrir menu"
					size="md"
					icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
					display={["flex", "flex", "none", "none"]}
				/>
			</PopoverTrigger>
			<PopoverContent
				mt="3px"
				borderRadius="none"
				borderTop="none"
				borderTopColor={useColorModeValue("grey.7", "grey.2")}
			>
				<PopoverBody
					px="2"
					backgroundColor={useColorModeValue("grey.10", "grey.1")}
				>
					<Flex
						gap="2"
						h="sm"
						overflow="hidden"
						justifyContent="space-evenly"
						flexDirection="column"
						borderRadius="none"
					>
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
