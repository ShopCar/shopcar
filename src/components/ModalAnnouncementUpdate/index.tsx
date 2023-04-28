import { MenuItem } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const ModalAnnouncementUpdate = () => {
  const navigate = useNavigate();
  const [uuidUser, setuuidUser] = useState(
    localStorage.getItem("UUID@shopCar")
  );

  return (
    <>
      <MenuItem
        onClick={() => {
          navigate(`/profile/${uuidUser}`);
        }}
      >
        Meus Anúncios
      </MenuItem>
    </>
  );
};

export default ModalAnnouncementUpdate;
