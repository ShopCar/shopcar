import { Box, Flex, Image, Text } from "@chakra-ui/react";

import whiteLogo from "../../assets/logoW.png";

const Footer = () => {
  const hFlex = {
    base: "150px",
    md: "100px",
  };

  const pxFlex = {
    base: "16px",
    md: "30px",
    xl: "60px",
  };

  return (
    <>
      <Box bg="grey.0">
        <Flex
          h={hFlex}
          px={pxFlex}
          align="center"
          justifyContent="space-evenly"
          flexDirection={{
            base: "column",
            md: "row",
          }}
        >
          <Box>
            <Image
              objectFit="cover"
              src={whiteLogo}
              alt="ShopCar Logo"
              title="ShopCar"
              h="60px"
            />
          </Box>
          <Flex justifyContent="center" w="full">
            <Text size="2" variant="400" color="white" textAlign="center">
              © 2023 ShopCar. All rights reserved
            </Text>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Footer;
