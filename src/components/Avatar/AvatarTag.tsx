import { Avatar, Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";

import { iAvatarProps } from "../../types/compoments";

const AvatarTag = ({ name }: iAvatarProps) => {
	return (
		<Tag
			size="md"
			borderRadius="full"
			background="none"
			w="fit-content"
			pl="0"
			border="none"
		>
			<Avatar size="sm" name={name} mr={4} />
			<TagLabel color={useColorModeValue("grey.2", "grey.10")}>{name}</TagLabel>
		</Tag>
	);
};
//ml={-1}
export default AvatarTag;
