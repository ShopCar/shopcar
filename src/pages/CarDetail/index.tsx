import {
	Badge,
	Box,
	Flex,
	Heading,
	Image,
	Text,
	VStack,
	Button,
	Avatar,
	Textarea,
	background,
	Stack,
	Grid,
	GridItem,
	useColorModeValue
} from "@chakra-ui/react";
import CarPhotos from "../../components/CarPhotos";
import Comment from "../../components/Comment";
import { MouseEvent, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { icarResponse, icurrentCar } from "../../types/cars.type";
import api from "../../services/api";
import { iComment } from "../../types/comments";
import { useUserContext } from "../../contexts/userContext";
import { AxiosResponse } from "axios";
import NavLink from "../../components/NavLink";
import AvatarTag from "../../components/Avatar/AvatarTag";
import { AvatarProfile } from "../../components/Avatar";

const CarDetail = () => {
	const { user, setUser } = useUserContext();
	const [currentCar, setCurrentCar] = useState<icurrentCar | null>(null);
	const [comments, setComments] = useState<iComment[] | null>(null);
	const [comment, setComment] = useState<string | null>(null);

	const { id } = useParams();

	useEffect(() => {
		const getInitialData = async () => {
			try {
				const userId = localStorage.getItem("UUID@shopCar");
				const token = localStorage.getItem("token@shopCar");
				const userData = await api(`/users/${userId}`, {
					headers: { Authorization: `Bearer ${token}` }
				});
				setUser(userData.data);

				const { data }: AxiosResponse<icarResponse> = await api(`/cars/${id}`);
				const { user, ...carData } = data;

				setCurrentCar({
					...carData,
					userId: user?.id,
					userName: user?.name,
					userDescription: user?.description
						? user?.description
						: "Anunciante sem descrição",
					userPhone: user?.phone
				});

				const response = await api(`/comments/cars/${data.id}`);
				setComments(response.data);
			} catch (error) {
				console.log(error);
			}
		};

		getInitialData();
	}, []);
	console.log(comments);

	const postComment = async () => {
		try {
			const token = localStorage.getItem("token@shopCar");
			const { data } = await api.post(
				`/comments/cars/${currentCar?.id}`,
				{ comment },
				{
					headers: { Authorization: `Bearer ${token}` }
				}
			);
			setComments([...comments!, data]);
		} catch (error) {
			console.log(error);
		}
	};

	const btnCommum = {
		bg: "grey.7",
		p: "8px 15px",
		color: "grey.3",
		fontSize: "14px",
		variant: "negative",
		borderRadius: "20px",
		isDisabled: user ? false : true
	};
	const bcCommum = useColorModeValue("grey.7", "grey.3");
	const textMode = useColorModeValue("grey.1", "grey.10");
	const bgCommum = useColorModeValue("grey.10", "grey.2");
	const bgGCommum = useColorModeValue(
		"linear-gradient(brand.1, brand.1 65vh, grey.7 65vh)",
		"linear-gradient(brand.1, brand.1 65vh, grey.1 65vh)"
	);

	return (
		<>
			<VStack
				pb="35px"
				minH="100vh"
				overflow="hidden"
				pt="90px!important"
				bgGradient={bgGCommum}
			>
				<Grid
					h="100%"
					pb="35px"
					px="16px"
					mx="auto!important"
					templateColumns="repeat(12, 4fr)"
					w={{ base: "100%", lg: "800px", xl: "1000px" }}
				>
					<GridItem colSpan={{ base: 12, md: 8 }} mr={{ lg: "48px" }}>
						<Box
							h="225px"
							borderRadius="3px"
							backgroundColor={bgCommum}
							mb="16px"
						>
							<Image
								h="100%"
								margin="0 auto"
								borderRadius="5px"
								alignItems="center"
								alt={currentCar ? currentCar.model : "Car"}
								src={currentCar ? currentCar.images.cover : ""}
							/>
						</Box>
						<Flex
							w="100%"
							mb="16px"
							h="22.75vh"
							padding="20px"
							borderRadius="3px"
							flexDirection="column"
							backgroundColor={bgCommum}
							justifyContent="space-around"
						>
							<Heading as="h3" size="6" h="20%" w="100%" textAlign="justify">
								{currentCar?.model}
							</Heading>
							<Flex h="20%" w="100%" justifyContent="space-between">
								<Flex>
									<Badge variant="opacity" p="0 5px">
										{currentCar?.year}
									</Badge>
									<Badge variant="opacity" p="0 5px" ml="10px">
										{`${currentCar?.km} KM`}
									</Badge>
								</Flex>
								<Text variant="500" color={textMode}>
									{Number(currentCar?.price).toLocaleString("pt-br", {
										style: "currency",
										currency: "BRL"
									})}
								</Text>
							</Flex>
							<NavLink
								variant="brand1"
								type="external"
								path={`api.whatsapp.com/send?phone=+55+${currentCar?.userPhone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
							>
								Comprar
							</NavLink>
						</Flex>
						<Flex
							w="100%"
							gap="8px"
							h="25vh"
							padding="20px"
							borderRadius="3px"
							flexDirection="column"
							backgroundColor={bgCommum}
							justifyContent="space-between"
						>
							<Heading as="h3" size="6" w="100%" textAlign="justify">
								Descrição
							</Heading>
							<Text size="7" textAlign="justify" minH="80px">
								{currentCar?.description
									? currentCar.description
									: "Anúncio sem descrição"}
							</Text>
						</Flex>
					</GridItem>

					<GridItem colSpan={{ base: 12, md: 4 }} mt="16px">
						<CarPhotos
							photos={String(currentCar?.images.gallery)
								.replace(/[}"\{]/g, "")
								.split(",")}
						/>
						<Box
							w="100%"
							my="16px"
							minH="250px"
							padding="20px"
							borderRadius="3px"
							backgroundColor={bgCommum}
						>
							<VStack gap="8px">
								<AvatarProfile name={currentCar?.userName!} color="brand.1" />

								<Text minH="50px" textAlign="center">
									{currentCar?.userDescription}
								</Text>
								<Button padding="8px 15px" fontWeight="400" variant="standard">
									Ver Todos Anúncios
								</Button>
							</VStack>
						</Box>
					</GridItem>
					<GridItem
						gap="32px"
						mr={{ base: "0px", lg: "48px" }}
						colSpan={{ base: 12, md: 8 }}
					>
						<VStack
							w="full"
							minH="22.75vh"
							padding="20px"
							borderRadius="3px"
							alignItems="start"
							backgroundColor={bgCommum}
						>
							<Heading as="h3" size="6" textAlign="start">
								Comentários
							</Heading>
							{comments?.map((comment: any, index: number) => (
								<Comment
									setComments={setComments}
									comments={comments}
									commentData={comment}
									key={index}
									userName={comment.user.name
										.split(" ")
										.filter(
											(name: string, index: number) =>
												index === 0 || index === 1
										)
										.join(" ")}
									comment={comment.comment}
									time="há 5 dias"
									color="brand.1"
								/>
							))}
						</VStack>

						<Box
							mt="35px"
							w="100%"
							padding="20px"
							borderRadius="3px"
							backgroundColor={bgCommum}
						>
							<AvatarTag
								name={user ? user.name : "Visitante"}
								color={user ? "brand.1" : "#153D2E"}
							/>
							<VStack w="full">
								<Flex
									p="8px"
									w="full"
									mt="15px"
									mb={{ base: "45px", md: "15px" }}
									pb={{ md: "55px" }}
									align="end"
									border="solid 2px"
									borderRadius="4px"
									position="relative"
									title={user ? "Comentar" : "Faça login para comentar"}
									_focusVisible={{
										outline: "2px solid var(--chakra-colors-brand-1)"
									}}
									borderColor={
										comment ? "var(--chakra-colors-brand-1)" : bcCommum
									}
									_focusWithin={{ borderColor: "var(--chakra-colors-brand-1)" }}
								>
									<Textarea
										h="85px"
										resize="none"
										overflowY="hidden"
										border="none!important"
										outline="none!important"
										_focusVisible={{
											border: "none!important",
											outline: "none!important"
										}}
										value={user && comment ? comment : ""}
										isDisabled={user ? false : true}
										placeholder="Deixe aqui seu comentário..."
										onChange={e => setComment(e.target.value)}
									/>
									<Button
										p="8px"
										size="small"
										variant="brand1"
										onClick={() => {
											postComment();
											setComment("");
										}}
										position="absolute"
										right={{ md: "10px" }}
										isDisabled={user ? false : true}
										left={{ base: "1px", md: "unset" }}
										bottom={{ base: "-40px", md: "10px" }}
									>
										Comentar
									</Button>
								</Flex>
								<Flex
									w="full"
									gap="10px"
									wrap={{ md: "wrap" }}
									flexDirection={{ base: "column", md: "row" }}
								>
									<Button
										{...btnCommum}
										whiteSpace="pre-wrap"
										onClick={e => setComment(e.currentTarget.innerText)}
									>
										Gostei muito!
									</Button>
									<Button
										{...btnCommum}
										whiteSpace="pre-wrap"
										onClick={e => setComment(e.currentTarget.innerText)}
									>
										Incrivel!
									</Button>
									<Button
										{...btnCommum}
										whiteSpace="pre-wrap"
										onClick={e => setComment(e.currentTarget.innerText)}
									>
										Recomendarei para meus amigos!
									</Button>
								</Flex>
							</VStack>
						</Box>
					</GridItem>
				</Grid>
			</VStack>
		</>
	);
};

export default CarDetail;
function async() {
	throw new Error("Function not implemented.");
}
{
	/* <Flex
				w="full"
				justifyContent="center"
				gap="50px"
				flexDirection={{ base: "column", sm: "row" }}
			>
				<Box
					w="45%"
					h="100%"
					maxH="235px"
					backgroundColor={bgCommum}
					borderRadius="3px"
				>
					<Image
						src={currentCar ? currentCar.images.cover : ""}
						alt={currentCar ? currentCar.model : "Car"}
						borderRadius="5px"
						margin="0 auto"
						alignItems="center"
						h="100%"
						maxH="235px"
					/>
				</Box>
				<CarPhotos
					photos={String(currentCar?.images.gallery)
						.replace(/[}"\{]/g, "")
						.split(",")}
				/>
			</Flex>
			<Flex minH="50vh" w="full" justifyContent="center" gap="50px">
				<VStack w="45%" h="35%">
					<Flex
						flexDirection="column"
						justifyContent="space-around"
						w="100%"
						h="22.75vh"
						backgroundColor="grey.10"
						padding="20px"
						borderRadius="3px"
					>
						<Heading as="h3" size="6" h="20%" w="100%" textAlign="justify">
							{currentCar?.model}
						</Heading>
						<Flex h="20%" w="100%" justifyContent="space-between">
							<Flex>
								<Badge variant="opacity" p="0 5px">
									{currentCar?.year}
								</Badge>
								<Badge variant="opacity" p="0 5px" ml="10px">
									{`${currentCar?.km} KM`}
								</Badge>
							</Flex>
							<Text color="grey.1" variant="500">
								{Number(currentCar?.price).toLocaleString("pt-br", {
									style: "currency",
									currency: "BRL"
								})}
							</Text>
						</Flex>
						<NavLink
							variant="brand1"
							type="external"
							path={`api.whatsapp.com/send?phone=+55+${currentCar?.userPhone}&text=Ol%C3%A1%2C%20venho%20por%20meio%20do%20seu%20portf%C3%B3lio%20na%20internet%2C%20gostaria%20de%20conhecer%20melhor%20seus%20servi%C3%A7os`}
						>
							Comprar
						</NavLink>
					</Flex>
					<Flex
						flexDirection="column"
						justifyContent="space-between"
						w="100%"
						h="22.75vh"
						backgroundColor="grey.10"
						padding="20px"
						borderRadius="3px"
						gap="8px"
					>
						<Heading as="h3" size="6" w="100%" textAlign="justify">
							Descrição
						</Heading>
						<Text size="7" textAlign="justify" minH="80px">
							{currentCar?.description
								? currentCar.description
								: "Anúncio sem descrição"}
						</Text>
					</Flex>
				</VStack>
				<Box
					w="25%"
					h="100%"
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
							{currentCar?.userName}
						</Heading>
						<Text textAlign="center">{currentCar?.userDescription}</Text>
						<Button padding="8px 15px" fontWeight="400">
							Ver Todos Anúncios
						</Button>
					</VStack>
				</Box>
			</Flex>
			<Stack w="74%" my="0!important" gap="2rem">
				<VStack
					w="61%"
					minH="22.75vh"
					backgroundColor="grey.10"
					padding="20px"
					borderRadius="3px"
					alignItems="start"
				>
					<Heading as="h3" size="6" textAlign="start">
						Comentários
					</Heading>
					{comments?.map((comment: any) => (
						<Comment
							userName={comment.user.name
								.split(" ")
								.filter(
									(name: string, index: number) => index === 0 || index === 1
								)
								.join(" ")}
							comment={comment.comment}
							time="há 5 dias"
							color="#E34D8C"
						/>
					))}
				</VStack>
				<Box
					mt="35px"
					w="61%"
					h="100%"
					backgroundColor="grey.10"
					borderRadius="3px"
					padding="20px"
				>
					<Flex gap="8px" alignItems="center">
						<Avatar
							mr="10px"
							name={user?.name}
							size="sm"
							backgroundColor="#153D2E"
						></Avatar>
						<Heading mr="15px" as="h3" size="7" variant="500">
							{user?.name
								.split(" ")
								.filter((name, index) => index === 0 || index === 1)
								.join(" ")}
						</Heading>
					</Flex>
					<VStack w="full">
						<Flex
							mt="15px"
							mb="15px"
							p="8px"
							w="full"
							align="end"
							border="solid 2px"
							borderColor="grey.7"
						>
							<textarea
								style={{ width: "100%", minHeight: "100px" }}
								placeholder="Deixe aqui seu comentário..."
								onChange={e => setComment(e.target.value)}
								value={comment ? comment : ""}
							/>
							<Button
								onClick={() => {
									postComment();
									setComment("");
								}}
								size="small"
								variant="brand1"
								p="8px"
							>
								Comentar
							</Button>
						</Flex>
						<Flex w="full" gap="10px">
							<Button
								fontSize="14px"
								variant="negative"
								color="grey.3"
								bg="grey.7"
								p="8px 15px"
								borderRadius="20px"
								onClick={e => setComment(e.target.innerHTML)}
							>
								Gostei muito!
							</Button>
							<Button
								fontSize="14px"
								variant="negative"
								color="grey.3"
								bg="grey.7"
								p="8px 15px"
								borderRadius="20px"
								onClick={e => setComment(e.target.innerHTML)}
							>
								Incrivel!
							</Button>
							<Button
								fontSize="14px"
								variant="negative"
								color="grey.3"
								bg="grey.7"
								p="8px 15px"
								borderRadius="20px"
								onClick={e => setComment(e.target.innerHTML)}
							>
								Recomendarei para meus amigos!
							</Button>
						</Flex>
					</VStack>
				</Box>
			</Stack> */
}
