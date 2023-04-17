import { Flex } from "@chakra-ui/layout";
import { Divider, HStack, Stack } from "@chakra-ui/react";
import { useColorModeValue } from "@chakra-ui/color-mode";

import NavBar from "../NavBar";
import Logo from "../Logo";

const Header = () => {
  const px = {
    xs: "16px",
    sm: "16px",
    md: "30px",
    xl: "60px",
    "2xl": "60px",
  };
  return (
    <>
      <Flex
        as="header"
        w="full"
        h="60px"
        px={px}
        align="center"
        zIndex="sticky"
        position="fixed"
        justifyContent="center"
        borderBottom="1px solid"
        borderColor={useColorModeValue("grey.7", "grey.2")}
        bg={useColorModeValue("grey.10", "grey.1")}
      >
        <Logo />
        <NavBar />
      </Flex>
    </>
  );
};

export default Header;
