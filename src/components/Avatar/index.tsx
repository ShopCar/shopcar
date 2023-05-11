import { Avatar, VStack, Heading } from "@chakra-ui/react";

import { iAvatarProps } from "../../types/compoments";

const AvatarProfile = ({ name, color }: iAvatarProps) => {
	return (
		<>
			<VStack gap="8px">
				<Avatar
					name={name}
					size="lg"
					backgroundColor={color}
					color="white"
				></Avatar>
				<Heading as="h3" size="6" variant="500">
					{name}
				</Heading>
			</VStack>
		</>
	);
};

export { AvatarProfile };
