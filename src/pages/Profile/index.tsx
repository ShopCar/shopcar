import { Button, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import RegisterCarModal from "../../components/RegisterCarModal";
import {  useEffect, useState } from "react";
import { useCarContext } from "../../contexts/carContext";
import { useUserContext } from "../../contexts/userContext";
import AvatarInitials from "../../components/Avatar/AvatarInitials";
import api from "../../services/api";
import ProductCard from "../../components/ProductCard";

const Profile = () => {
	const { setBrands, getCarsBrands, brands} = useCarContext()
	const {user, setUser} = useUserContext()

	const [ isOpen, setIsOpen] = useState(false);
	const [isSeller, setIsSeller] = useState(localStorage.getItem("isSeller@shopCar"));
	const [userCars, setUserCars] = useState<any>(null);

	useEffect(() => {
		const setInitialData = async () => {
			setBrands(await getCarsBrands());
			const {data} = await api(`/users/${localStorage.getItem("UUID@shopCar")}`, {headers: {
				Authorization: `Bearer ${localStorage.getItem("token@shopCar")}`
			}})
			setUser(data)
			const carResponse = await api(`/cars?id=${localStorage.getItem("UUID@shopCar")}`)
			setUserCars(carResponse.data)
		}
		setInitialData()

	},[])
	return (
		<VStack
			h="100vh"
			bgGradient="linear-gradient(brand.1, brand.1 25vh, grey.7 25vh)"
			pt={"90px"}
		>	<VStack
				w="40vw"
				alignItems={"start"}
		>
				<AvatarInitials
						name={user? user.name : ""}
						color={"green"}
				/>
				<Heading size={"6"}>{user && user.name}</Heading>
				<Text>{user && user.description? user.description : "Anunciante sem descrição"}</Text>
  				<Button display={isSeller? "" : "none"} variant={"brand1"} size={"medium"} onClick={() => {setIsOpen(true)}}>Criar anúncio</Button>
			</VStack>
			<RegisterCarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
			<Flex
				gap={"1rem"}
			>
			{
				userCars && userCars.map((item) => (
					<ProductCard id={item.id} km={item.km} year={item.year} imageUrl={item.cover} imageAlt={item.model} carTitle={item.model} carDescription={item.description? item.description : "Anúncio sem descrição"} formattedPrice key={item.id} />
				))
			}
			</Flex>
		</VStack>
	)
};

export default Profile;
