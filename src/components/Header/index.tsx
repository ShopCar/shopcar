import { useColorModeValue } from "@chakra-ui/color-mode";
import { Flex, HStack } from "@chakra-ui/layout";

import NavBar from "../NavBar";
import Logo from "../Logo";

const Header = () => {
  return (
    <>
      <Flex
        as="header"
        w="full"
        h="60px"
        px="60px"
        align="center"
        zIndex="sticky"
        position="fixed"
        justifyContent="center"
        borderBottom="1px solid"
        bg={useColorModeValue("grey.10", "grey.1")}
        borderColor={useColorModeValue("grey.6", "grey.2")}
      >
        <Logo />
        <NavBar />
      </Flex>
    </>
  );
};

export default Header;
