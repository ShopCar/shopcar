import { Heading, VStack } from "@chakra-ui/layout";
import RegisterUser from "../../components/RegisterUser";

const Register = () => {
  return (
    <VStack gap="4" h="150vh" pt="60px">
      <Heading>
        <RegisterUser />
      </Heading>
    </VStack>
  );
};

export default Register;
