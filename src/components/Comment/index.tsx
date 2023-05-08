import { Flex } from "@chakra-ui/layout";
import { Heading, VStack, Text, Avatar } from '@chakra-ui/react'

const Comment = ({userName, comment, time, color}: {userName: string, comment: string, time: string, color: string}) => {
	return (
		<>
			<VStack
				alignItems="start"
			>
				<Flex
					alignItems="center"
				>
					<Avatar
						mr="10px"
						name={userName}
						size="sm"
						backgroundColor={color}
					></Avatar>
					<Heading mr="15px" as="h3" size="7" variant="500">
						{userName}
					</Heading>
					<Text
						color="gray.2"
					>
						{time}
					</Text>
				</Flex>
				<Text
					textAlign="justify"
					size="8"
				>
					{comment}
				</Text>
			</VStack>
		</>
	);
};

export default Comment;