import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import RegisterCarModal from "../../components/RegisterCarModal";
import {  useEffect, useState } from "react";
import { useCarContext } from "../../contexts/carContext";
import { useUserContext } from "../../contexts/userContext";
import AvatarInitials from "../../components/Avatar/AvatarInitials";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard";
import { useParams } from "react-router-dom";

const Profile = () => {
	const { setBrands, getCarsBrands, brands} = useCarContext()
	const {user, setUser} = useUserContext()

	const [ isOpen, setIsOpen] = useState(false);
	const [ isOwner, setIsOwner] = useState(false);
	const [isSeller, setIsSeller] = useState(localStorage.getItem("isSeller@shopCar"));
	const [userCars, setUserCars] = useState<null | any[]>(null);
	
	const {id} = useParams()

	useEffect(() => {
		const setInitialData = async () => {
			const uuid = localStorage.getItem("UUID@shopCar");

			setBrands(await getCarsBrands());
			
			const {data} = await api(`/users/${uuid}`, {headers: {
				Authorization: `Bearer ${localStorage.getItem("token@shopCar")}`
			}})
			setUser(data)
			
			const carResponse = await api(`/cars?id=${id}`)
			setUserCars(carResponse.data)

			id === uuid? setIsOwner(true) : setIsOwner(false)
		}
		setInitialData()

	},[isOpen])
	return (
		<VStack
			minH="100vh"
			w="100%"
			bgGradient="linear-gradient(brand.1, brand.1 25vh, grey.7 25vh)"
			pt={"90px"}
			justifyContent={"center"}
		>	<VStack
				w={{base: "90vw", md: "70vw"}}
				alignItems="start"
				bgColor="grey.10"
				borderRadius="5px"
				p="1.5rem"
		>
				<AvatarInitials
					name={user? user.name : ""}
					color={"green"}
					id={id!}
				/>
				<Heading size={"6"}>{user && user.name}</Heading>
				<Text textAlign={"justify"}>{user && user.description? user.description : "Anunciante sem descrição"}</Text>
  				<Button display={isSeller && isOwner? "" : "none"} variant={"outlineBrand1"} size={"medium"} onClick={() => {setIsOpen(true)}}>Criar anúncio</Button>
			</VStack>
			<RegisterCarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
			<Flex
				justifyContent={"space-between"}
				flexWrap={"wrap"}
				width={"90vw"}
				pb="3rem"
			>
			{
				userCars && userCars.map((item) => (
					<ProductCard buttons={true} owner={{name: item.user.name, id: item.user.id}} padding="3rem 0 0 0" id={item.id} km={item.km} year={item.year} imageUrl={item.images.cover} imageAlt={item.model} carTitle={item.model} carDescription={item.description? item.description : "Anúncio sem descrição"} formattedPrice={Number(item.price).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })} key={item.id} />
				))
			}
			</Flex>
		</VStack>
	)
};

export default Profile;
