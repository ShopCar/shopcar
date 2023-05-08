import { Flex } from "@chakra-ui/react";

import NavLink from "../NavLink";
import AuthenticatedNav from "./AuthenticatedNav";
import { useUserContext } from "../../contexts/userContext";

const DesktopNav = () => {
	const dpFlex = ["none", "none", "none", "none", "flex", "flex", "flex"];
	const { user } = useUserContext();

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
				{!Boolean(user) ? (
					<>
						<NavLink path="/login" type="router">
							Fazer Login
						</NavLink>
						<NavLink path="/register" type="router" variant="outline">
							Cadastrar
						</NavLink>
					</>
				) : (
					<AuthenticatedNav />
				)}
			</Flex>
		</>
	);
};

export default DesktopNav;
