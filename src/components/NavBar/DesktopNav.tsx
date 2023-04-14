import { Flex } from "@chakra-ui/react";

import NavLink from "../NavLink";

const DesktopNav = () => {
	return (
		<>
			<Flex
				display={["none", "none", "flex", "flex", "flex"]}
				align="center"
				justifyContent="space-between"
				gap="10"
				py="2"
				pl="8"
				w={{ sm: "61%", md: "45%", lg: "30%", "2xl": "30%" }}
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
