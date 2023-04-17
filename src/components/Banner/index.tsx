import { Stack, Flex, Text, VStack, Heading } from "@chakra-ui/react";

const Banner = () => {
	const imgUrl =
		"url(https://images.unsplash.com/photo-1595391937914-c84f16f2b129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)";

	return (
		<Flex
			w="full"
			h="70vh"
			backgroundSize="cover"
			backgroundImage={imgUrl}
			backgroundPosition="center"
		>
			<VStack w="full" justify="center" px={{ base: 4, md: 8 }}>
				<Stack maxW="2xl" align="center" spacing={6}>
					<Heading color="white"> ShopCar</Heading>
					<Text
						color="white"
						textAlign="center"
						fontWeight={700}
						lineHeight={1.2}
						fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }}
					>
						A melhor plataforma de anúncios de carros do país
					</Text>
				</Stack>
			</VStack>
		</Flex>
	);
};

export default Banner;
