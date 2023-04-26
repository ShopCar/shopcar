import { Flex, VStack } from "@chakra-ui/layout";

const Dashboard = () => {
  return (
    <VStack gap="4" minHeight={"90vh"} pt="60px">
      <Flex w="full" justifyContent={"center"} bg="gray.100">
        <h1>Dashboard</h1>
      </Flex>
    </VStack>
  );
};

export default Dashboard;
