import { Avatar } from "@chakra-ui/react";

import { iAvatarProps } from "../../types/compoments";

const AvatarInitials = ({ name, color }: iAvatarProps) => {
	return <Avatar name={name} size="sm" backgroundColor={color} />;
};

export default AvatarInitials;
