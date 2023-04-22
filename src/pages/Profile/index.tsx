import { Button, VStack, useDisclosure } from "@chakra-ui/react";
import RegisterCarModal from "../../components/RegisterCarModal";
import {  useEffect, useState } from "react";
import { useCarContext } from "../../contexts/carContext";

const Profile = () => {
	const { setBrands, getCarsBrands, brands} = useCarContext()
	const [ isOpen, setIsOpen] = useState(false)
	const [isSeller, setIsSeller] = useState(true) //Alterar para utilizar a propriedade isSeller do estado do usuário
	useEffect(() => {
		const setInitialCarsBrands = async () => {
			setBrands(await getCarsBrands());
		}
		setInitialCarsBrands()
	},[])
	return (
		<VStack
			pt={"90px"}
		>

  			<Button display={isSeller? "" : "none"} variant={"brand1"} size={"medium"} onClick={() => {setIsOpen(true)}}>Criar anúncio</Button>
			<RegisterCarModal isOpen={isOpen} setIsOpen={setIsOpen}/>
			{/* Espaço para colocar os cards do vendedor*/}
		</VStack>
	)
};

export default Profile;
