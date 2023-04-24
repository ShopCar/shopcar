import { Avatar } from "@chakra-ui/react";

import { iAvatarProps } from "../../types/compoments";

const AvatarInitials = ({ name, color }: iAvatarProps) => {
	return <Avatar name={name} size="md" backgroundColor={color} />;
};

export default AvatarInitials;
