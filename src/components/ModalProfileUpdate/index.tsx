import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Button,
  MenuItem,
  Heading,
} from "@chakra-ui/react";
import InputForm from "../Input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useToastForm } from "../../contexts/toastContext";
import { useNavigate } from "react-router-dom";

interface iModalProfileUpdate {
  open: boolean;
}

const ModalProfileUpdate = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { toast } = useToastForm();
  const navigate = useNavigate();

  const [token, setToken] = useState(localStorage.getItem("token@shopCar"));
  const [uuidUser, setuuidUser] = useState(
    localStorage.getItem("UUID@shopCar")
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [description, setDescription] = useState("");

  const formSchame = z.object({
    name: z.string().min(1, "Insira seu nome").optional(),
    email: z.string().email("Digite um email válido").optional(),
    cpf: z.string().length(11, "CPF deve conter 11 números").optional(),

    phone: z
      .string()
      .min(10, "Deve conter no mínimo 10 nuúmeros")
      .max(11, "Deve conter no máximo 11 nuúmeros")
      .regex(/^[0-9]+$/, "Phone number must contain only numbers")
      .optional(),
    birthdate: z.string().optional(),
    description: z.string().nullish().optional(),
  });

  type iUserUpdate = z.infer<typeof formSchame>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserUpdate>({ resolver: zodResolver(formSchame) });

  const reloadProfile = async () => {
    const { data } = await api.get(`/users/${uuidUser}`, {
      headers: { Authorization: `Barear ${token}` },
    });

    setName(data.name);
    setEmail(data.email);
    setCpf(data.cpf);
    setPhone(data.phone);
    setBirthdate(data.birthdate);
    setDescription(data.description);
  };
  useEffect(() => {
    reloadProfile();
  }, []);

  const updateProfile = async (data: iUserUpdate) => {
    try {
      await api.patch(`/users/${uuidUser}`, data, {
        headers: { Authorization: `Barear ${token}` },
      });
      toast({
        title: "sucess",
        message: `Sucesso`,
        position: "top-left",
        color: "green.500",
      });
      onClose();
      setTimeout(() => {
        navigate(0);
      }, 2000);
    } catch (error: any) {
      toast({
        title: "sucess",
        message: error.response.data.message,
        position: "top-left",
        color: "red.500",
      });
    }
  };

  const deleteProfile = async () => {
    try {
      const resp = await api.delete(`/users/${uuidUser}`, {
        headers: { Authorization: `Barear ${token}` },
      });
      toast({
        title: "sucess",
        message: `Usuario deletado`,
        position: "top-left",
        color: "green.500",
      });
      onClose();
      localStorage.clear();
      setTimeout(() => {
        navigate(0);
      }, 2000);
    } catch (error) {
      toast({
        title: "error",
        message: `Erro ao deletar`,
        position: "top-left",
        color: "red.500",
      });
    }
  };

  return (
    <>
      <MenuItem
        onClick={() => {
          onOpen();
        }}
      >
        Editar Perfil
      </MenuItem>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW={"520px"}>
          <ModalHeader>Editar Perfil</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Heading as="h4" size={"9"} variant={"500"}>
              Informações pessoais
            </Heading>
            <InputForm
              id="1"
              type="text"
              label="Nome"
              placeholder="Ex: Samuel Leão"
              register={register("name")}
              error={errors.name}
              defaultValue={name}
            />
            <InputForm
              id="2"
              type="text"
              label="Email"
              placeholder="Ex: samuel@kenzie.com.br"
              register={register("email")}
              error={errors.email}
              defaultValue={email}
            />
            <InputForm
              id="3"
              type="number"
              label="CPF"
              placeholder="000.000.000-00"
              register={register("cpf")}
              error={errors.cpf}
              defaultValue={cpf}
            />
            <InputForm
              id="4"
              type="text"
              label="Celular"
              placeholder="(DDD) 98765-4321"
              register={register("phone")}
              error={errors.phone}
              defaultValue={phone}
            />
            <InputForm
              id="5"
              type="date"
              label="Data de Nascimento"
              placeholder="00/00/0000"
              register={register("birthdate")}
              error={errors.birthdate}
              defaultValue={birthdate}
            />
            <InputForm
              id="6"
              type="textarea"
              label="Descrição"
              placeholder="Digitar descrição"
              register={register("description")}
              error={errors.description}
              defaultValue={description}
            />
          </ModalBody>
          <ModalFooter justifyContent={"space-between"}>
            <Button onClick={onClose} variant={"negative"} size={"3"}>
              Cancel
            </Button>
            <Button variant={"alert"} size={"3"} onClick={deleteProfile}>
              Excluir Perfil
            </Button>
            <Button
              variant={"brand1"}
              size={"3"}
              onClick={handleSubmit(updateProfile)}
            >
              Salvar Alteração
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalProfileUpdate;
