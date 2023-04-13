import {
	Stack,
	Flex,
	Button,
	Text,
	VStack,
	useBreakpointValue,
	Heading
} from "@chakra-ui/react";
// ./src/assets/banner.png
const Banner = () => {
	return (
		<Flex
			w={"full"}
			h="60%"
			backgroundImage={
				"url(https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)"
			}
			backgroundSize="cover"
			backgroundPosition={"center center"}
		>
			<VStack
				w={"full"}
				justify={"center"}
				px={useBreakpointValue({ base: 4, md: 8 })}
				bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
			>
				<Stack maxW={"2xl"} align={"center"} spacing={6}>
					<Heading color="white"> ShopCar</Heading>
					<Text
						color={"white"}
						fontWeight={700}
						lineHeight={1.2}
						fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
					>
						A melhor plataforma de anúncios de carros do país
					</Text>
				</Stack>
			</VStack>
		</Flex>
	);
};

export default Banner;
