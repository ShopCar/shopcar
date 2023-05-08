import { Avatar, Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";

import { iAvatarProps } from "../../types/compoments";
import { useNavigate } from "react-router-dom";

const AvatarTag = ({ name, color, id }: iAvatarProps) => {
	const navigate = useNavigate();
	return (
		<>
			{id ? (
				<Tag
					size="md"
					borderRadius="full"
					background="none"
					w="fit-content"
					pl="0"
					border="none"
				>
					<Avatar
						size="sm"
						name={name}
						mr={4}
						backgroundColor={color}
						onClick={() => navigate(`/profile/${id}`)}
					/>
					<TagLabel
						onClick={() => navigate(`/profile/${id}`)}
						color={useColorModeValue("grey.2", "grey.10")}
					>
						{name}
					</TagLabel>
				</Tag>
			) : (
				<Tag
					size="md"
					borderRadius="full"
					background="none"
					w="fit-content"
					pl="0"
					border="none"
				>
					<Avatar size="sm" name={name} mr={4} backgroundColor={color} />
					<TagLabel color={useColorModeValue("grey.2", "grey.10")}>
						{name}
					</TagLabel>
				</Tag>
			)}
		</>
	);
};
//ml={-1}
export default AvatarTag;
