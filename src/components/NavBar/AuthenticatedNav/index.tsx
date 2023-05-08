import { useNavigate } from "react-router-dom";
import { Flex, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";

import { useUserContext } from "../../../contexts/userContext";
import { useGlobalContext } from "../../../contexts/globalContext";

import AvatarTag from "../../Avatar/AvatarTag";
import AvatarInitials from "../../Avatar/AvatarInitials";
import ModalAddressUpdate from "../../ModalAddressUpdate";
import ModalProfileUpdate from "../../ModalProfileUpdate";
import ModalAnnouncementUpdate from "../../ModalAnnouncementUpdate";

const AuthenticatedNav = () => {
	const { windowSize } = useGlobalContext();
	const { user, setUser } = useUserContext();
	const navigate = useNavigate();

	const logout = () => {
		localStorage.clear();
		setUser(null);
		navigate("/");
	};

	return (
		<Flex minWidth={"185px"} gap={"8px"} justifyContent="flex-end">
			<Menu isLazy lazyBehavior="keepMounted">
				<MenuButton>
					{windowSize.innerWidth < 768 ? (
						<AvatarInitials name={user?.name!} color="brand.2" />
					) : (
						<AvatarTag name={user?.name!} color="brand.2" />
					)}
				</MenuButton>
				<MenuList mt="4px">
					<ModalProfileUpdate />
					<ModalAddressUpdate />
					{user?.isSeller && <ModalAnnouncementUpdate />}
					<MenuItem onClick={logout}>Sair</MenuItem>
				</MenuList>
			</Menu>
		</Flex>
	);
};

export default AuthenticatedNav;
