import { Avatar, Tag, TagLabel, useColorModeValue } from "@chakra-ui/react";

import { iAvatarProps } from "../../types/compoments";
import { useNavigate } from "react-router-dom";

const AvatarTag = ({ name, color, id }: iAvatarProps) => {
	const navigate = useNavigate();

	const hoverConfig = {
		"&:hover": {
			cursor: "pointer",
			".label": {
				color: useColorModeValue("brand.1", "grey.6"),
				transition: "all 0.5s ease-out"
			}
		}
	};

	return (
		<>
			{id ? (
				<Tag
					size="md"
					borderRadius="full"
					background="none"
					w="fit-content"
					pl="0"
					sx={hoverConfig}
					border="none"
					onClick={() => navigate(`/profile/${id}`)}
				>
					<Avatar
						size="sm"
						name={name}
						mr={4}
						backgroundColor={color}
						color="white"
					/>
					<TagLabel
						color={useColorModeValue("grey.2", "grey.10")}
						className="label"
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
					<Avatar
						size="sm"
						name={name}
						mr={4}
						backgroundColor={color}
						color="white"
					/>
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
