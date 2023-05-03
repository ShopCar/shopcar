import { Flex, VStack } from "@chakra-ui/layout";
import RegisterUser from "../../components/RegisterUser";
import { useColorModeValue } from "@chakra-ui/react";

const Register = () => {
	const fBG = useColorModeValue("gray.100", "grey.1");

	return (
		<VStack gap="4" minHeight={"150vh"} pt="60px">
			<Flex w="full" justifyContent={"center"} bg={fBG}>
				<RegisterUser />
			</Flex>
		</VStack>
	);
};

export default Register;
