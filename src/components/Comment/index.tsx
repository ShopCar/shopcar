import { CloseIcon } from "@chakra-ui/icons";
import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Text, Avatar, IconButton } from "@chakra-ui/react";
import AvatarTag from "../Avatar/AvatarTag";

const Comment = ({
	userName,
	comment,
	time,
	color
}: {
	userName: string;
	comment: string;
	time: string;
	color: string;
}) => {
	return (
		<>
			<VStack w="100%" alignItems="start" spacing="16px">
				<Flex w="100%" alignItems="center" justifyContent="space-between">
					<Flex w="100%">
						<AvatarTag name={userName} color={color} />

						<Text color="gray.2">{time}</Text>
					</Flex>
					<IconButton
						aria-label="excluir"
						icon={<CloseIcon boxSize="12px" />}
						ml="8px"
						_hover={{ color: "brand.1" }}
					/>
				</Flex>
				<Text textAlign="justify" size="8">
					{comment}
				</Text>
			</VStack>
		</>
	);
};

export default Comment;
