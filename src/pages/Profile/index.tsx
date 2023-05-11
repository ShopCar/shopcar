import {
	Button,
	Flex,
	Heading,
	Text,
	VStack,
	useColorModeValue
} from "@chakra-ui/react";
import RegisterCarModal from "../../components/RegisterCarModal";
import { useEffect, useState } from "react";
import { useCarContext } from "../../contexts/carContext";
import { useUserContext } from "../../contexts/userContext";
import AvatarInitials from "../../components/Avatar/AvatarInitials";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";
import AvatarTag from "../../components/Avatar/AvatarTag";
import { iUser } from "../../types/user.type";
import ResultMessage from "../ResetPassword/ResultMessage";
import { iUserCars } from "../../types/cars.type";

const Profile = () => {
	const { setBrands, getCarsBrands, brands } = useCarContext();
	const { user, setUser, owner, setOwner } = useUserContext();

	const [isOpen, setIsOpen] = useState(false);
	const [isOwner, setIsOwner] = useState(false);
	const [isSeller, setIsSeller] = useState(
		Boolean(localStorage.getItem("isSeller@shopCar"))
	);
	const [userCars, setUserCars] = useState<null | iUserCars>(null);

	const { id } = useParams();

	useEffect(() => {
		const setInitialData = async () => {
			setBrands(await getCarsBrands());

			const carResponse = await api<iUserCars>(`/users/${id}/cars`);
			setUserCars(carResponse.data);

			id === user?.id ? setIsOwner(true) : setIsOwner(false);
		};
		setInitialData();
	}, [, owner, id]);

	const bgGradient = useColorModeValue(
		"linear-gradient(brand.1, brand.1 65vh, grey.7 65vh)",
		"linear-gradient(brand.1, brand.1 65vh, grey.1 65vh)"
	);
	const bgCommum = useColorModeValue("grey.10", "grey.3");
	return (
		<VStack
			minH="100vh"
			w="100%"
			bgGradient={bgGradient}
			pt={"90px"}
			justifyContent={"center"}
		>
			{" "}
			<VStack
				w={{ base: "90vw", md: "70vw" }}
				alignItems="start"
				bgColor={bgCommum}
				borderRadius="5px"
				p="1.5rem"
			>
				<AvatarTag
					id={id!}
					name={userCars ? userCars.userName : "Informação Privada"}
					color={userCars?.userId === user?.id ? "brand.1" : ""}
				/>

				<Text textAlign={"justify"}>
					{userCars && userCars?.userDescription
						? userCars.userDescription
						: "Anunciante sem descrição"}
				</Text>
				<Button
					display={isSeller && isOwner ? "" : "none"}
					variant={"outlineBrand1"}
					size={"medium"}
					onClick={() => {
						setIsOpen(true);
					}}
				>
					Criar anúncio
				</Button>
			</VStack>
			<RegisterCarModal isOpen={isOpen} setIsOpen={setIsOpen} />
			{userCars && (
				<Flex
					justifyContent={"flex-start"}
					flexWrap={"wrap"}
					width={"90vw"}
					pb="3rem"
					gap={{ base: "1rem", md: "2rem", lg: "3rem" }}
				>
					{userCars.cars.map(item => (
						<ProductCard
							buttons={true}
							car={item}
							owner={{ name: userCars.userName, id: userCars.userId }}
							padding="3rem 0 0 0"
							id={item.id}
							km={item.km}
							year={Number(item.year)}
							imageUrl={item.images.cover}
							imageAlt={item.model}
							carTitle={item.model}
							carDescription={
								item.description ? item.description : "Anúncio sem descrição"
							}
							formattedPrice={Number(item.price).toLocaleString("pt-br", {
								style: "currency",
								currency: "BRL"
							})}
							key={item.id}
						/>
					))}
				</Flex>
			)}
			{userCars && !userCars.cars.length && (
				<VStack mt="8rem" w="full" alignItems="center">
					<ResultMessage type="error" style="single">
						Você ainda não possui carros cadastrados!
					</ResultMessage>
				</VStack>
			)}
		</VStack>
	);
};

export default Profile;
