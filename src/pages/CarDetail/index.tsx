import { Badge, Box, Flex, Heading, Image, Text, VStack, Button, Avatar } from "@chakra-ui/react";
import CarPhotos from "../../components/CarPhotos";
import Comment from "../../components/Comment";

const CarDetail = () => {
	return (
		<VStack
			h="100%"
			bgGradient="linear-gradient(brand.1, brand.1 65vh, grey.7 65vh)"
		>
			<Flex
				w="full"
				pt={"90px"}
				justifyContent="center"
				gap="50px"
			>	
				<Box
					w="45%"
					h="235px"
					backgroundColor="grey.10"
					borderRadius="3px"

				>
					<Image 
						src="https://th.bing.com/th/id/R.1d42197b7e9b990920501bce191f88f7?rik=4cKi%2f156T8QNPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fcar-png-car-png-file-1766.png&ehk=sx8SFXL7KavUZlPER7RmGVRtgHq4vasX3JEwojUXCgU%3d&risl=&pid=ImgRaw&r=0" 
						alt="car image"
						borderRadius="5px"
						margin="0 auto"
						maxH="100%"
					/>
				</Box>
				<CarPhotos/>
			</Flex>
			<Flex
				minH="65vh"
				w="full"
				justifyContent="center"
				gap="50px"
			>
				<VStack
					w="45%"
					h="35%"
				>
					<Flex
						flexDirection="column"
						justifyContent="space-around"
						w="100%"
						h="22.75vh"
						backgroundColor="grey.10"
						padding="20px"
						borderRadius="3px"
					>
						<Heading
							as="h3"
							size="6"
							h="20%"
							w="100%"
							textAlign="justify"
						>
							Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz
						</Heading>
						<Flex
							h="20%"
							w="100%"
							justifyContent="space-between"
						>
							<Flex>
								<Badge
									variant="opacity"
									p="0 5px"
								>
									2001
								</Badge>
								<Badge
									variant="opacity"
									p="0 5px"
									ml="10px"
								>
									0 KM
								</Badge>
							</Flex>
							<Text
								color="grey.1"
								variant="500"
							>
								R$ 75.000,00
							</Text>
						</Flex>
						<Button
							variant="brand1"
							size="small"
						>
							Comprar
						</Button>
					</Flex>
					<Flex
						flexDirection="column"
						justifyContent="space-between"
						w="100%"
						h="22.75vh"
						backgroundColor="grey.10"
						padding="20px"
						borderRadius="3px"
					>
						<Heading
							as="h3"
							size="6"
							w="100%"
							textAlign="justify"
						>
							Descrição
						</Heading>
						<Text
							size="7"
							textAlign="justify"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
						</Text>
					</Flex>
					<VStack
						w="100%"
						minH="22.75vh"
						backgroundColor="grey.10"
						padding="20px"
						borderRadius="3px"
						alignItems="start"
					>
						<Heading
							as="h3"
							size="6"
							textAlign="start"
						>
							Comentários
						</Heading>
						<Comment
							userName="Ana Júlia"
							comment="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
							time="há 5 dias"
							color="#E34D8C"
							/>
					</VStack>
				</VStack>
				<Box
					mt="35px"
					w="25%"
					h="42.25vh"
					backgroundColor="grey.10"
					borderRadius="3px"
					padding="20px"
				>
					<VStack gap="8px">
						<Avatar
							name="Samuel Leão"
							size="lg"
							backgroundColor="brand.1"
						></Avatar>
						<Heading as="h3" size="6" variant="500">
							Samuel Leão
						</Heading>
						<Text
							textAlign="center"
						>
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
						</Text>
						<Button
							padding="8px 15px"
							fontWeight="400"
						>
							Ver Todos Anúncios
						</Button>
					</VStack>
				</Box>
			</Flex>
		</VStack>
		
	);
};

export default CarDetail;
