import {
  Box,
  Button,
  Flex,
  Menu,
  MenuButton,
  MenuItem,
  MenuItemOption,
  MenuList,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../services/api";
import ModalAddressUpdate from "../../ModalAddressUpdate";
import ModalAnnouncementUpdate from "../../ModalAnnouncementUpdate";
import ModalProfileUpdate from "../../ModalProfileUpdate";

const AuthenticatedNav = () => {
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token@shopCar"));
  const [uuidUser, setuuidUser] = useState(
    localStorage.getItem("UUID@shopCar")
  );
  const [user, setUser] = useState("Default");
  const [acronym, setAcronym] = useState("DF");
  const [isSeller, setIsSeller] = useState(false);

  const getUser = async () => {
    try {
      const { data } = await api.get(`/users/${uuidUser}`, {
        headers: { Authorization: `Barear ${token}` },
      });
      setIsSeller(data.isSeller);
      let name = data.name.split(" ");
      name = name.map(
        (element: string) => element[0].toUpperCase() + element.substring(1)
      );
      setUser(`${name[0]} ${name[name.length - 1]}`);

      let acronyms = name[0][0] + name[name.length - 1][0];
      setAcronym(acronyms);
    } catch (error) {
      console.log(error);
    }
  };

  getUser();

  const logout = () => {
    localStorage.clear();
    navigate("/");
    navigate(0);
  };

  return (
    <Flex minWidth={"185px"} gap={"8px"}>
      <Flex
        backgroundColor={"#5126EA"}
        width={"32px"}
        height={"32px"}
        borderRadius={"16px"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
      >
        {acronym}
      </Flex>
      <Menu>
        <MenuButton>{user}</MenuButton>
        <MenuList>
          <ModalProfileUpdate />
          <ModalAddressUpdate />
          {!!isSeller ? <ModalAnnouncementUpdate /> : <></>}
          <MenuItem onClick={logout}>Sair</MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default AuthenticatedNav;
