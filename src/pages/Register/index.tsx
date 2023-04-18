import { Heading, Flex, VStack } from "@chakra-ui/layout";
import RegisterUser from "../../components/RegisterUser";

const Register = () => {
  return (
    <VStack gap="4" minHeight={"150vh"} pt="60px">
      <Flex w="full" justifyContent={"center"} bg="gray.100">
        <RegisterUser />
      </Flex>
    </VStack>
  );
};

export default Register;
