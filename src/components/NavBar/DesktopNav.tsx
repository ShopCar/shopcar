import { Flex } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import NavLink from "../NavLink";
import AuthenticatedNav from "./AuthenticatedNav";

const DesktopNav = () => {
  const dpFlex = ["none", "none", "none", "none", "flex", "flex", "flex"];

  const [token, setToken] = useState(localStorage.getItem("token@shopCar"));
  const [uuidUser, setuuidUser] = useState(
    localStorage.getItem("UUID@shopCar")
  );

  return (
    <>
      <Flex
        display={dpFlex}
        align="center"
        justifyContent="space-between"
        gap="8"
        py="2"
        pl="2"
      >
        {!Boolean(token && uuidUser) ? (
          <>
            <NavLink path="/login" type="router">
              Fazer Login
            </NavLink>
            <NavLink path="/register" type="router" variant="outline">
              Cadastrar
            </NavLink>
          </>
        ) : (
          <AuthenticatedNav />
        )}
      </Flex>
    </>
  );
};

export default DesktopNav;
