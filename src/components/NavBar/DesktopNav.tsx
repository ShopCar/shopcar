import { Flex } from "@chakra-ui/react";

import NavLink from "../NavLink";

const DesktopNav = () => {
	const dpFlex = ["none", "none", "none", "none", "flex", "flex", "flex"];

	return (
		<>
			<Flex
				display={dpFlex}
				align="center"
				justifyContent="space-between"
				gap="8"
				py="2"
				pl="2"
			>
				<NavLink path="/login" type="router">
					Fazer Login
				</NavLink>

				<NavLink path="/register" type="router" variant="outline">
					Cadastrar
				</NavLink>
			</Flex>
		</>
	);
};

export default DesktopNav;
