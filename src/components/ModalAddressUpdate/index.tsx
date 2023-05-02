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
	Flex
} from "@chakra-ui/react";
import InputForm from "../Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { useToastForm } from "../../contexts/toastContext";

const ModalAddressUpdate = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const navigate = useNavigate();
	const { toast } = useToastForm();

	const [token, setToken] = useState(localStorage.getItem("token@shopCar"));
	const [uuidUser, setuuidUser] = useState(
		localStorage.getItem("UUID@shopCar")
	);

	const [uuidAddress, setUuidAddress] = useState("");
	const [zipCode, setZipCode] = useState("");
	const [state, setState] = useState("");
	const [city, setCity] = useState("");
	const [district, setDistrict] = useState("");
	const [street, setStreet] = useState("");
	const [number, setNumber] = useState("");
	const [complement, setComplement] = useState("");

	const addressFormSchame = z.object({
		zipCode: z
			.string()
			.length(8, "O CEP deve conter exatamente 8 caracteres")
			.regex(/^[0-9]+$/, "O CEP deve conter apenas números"),
		state: z
			.string()
			.length(2, "O Estado deve conter 2 caracteres")
			.regex(/^[A-Za-z]+$/, "Deve conter apenas letras"),
		city: z.string().min(1, "Digite sua cidade").max(50),
		district: z.string().min(1, "Digite seu bairro").max(50),
		street: z.string().min(1, "Digite sua rua").max(50),
		number: z
			.string()
			.min(1, "Digite o numero")
			.max(10, "Maximo 10 números")
			.regex(/^[0-9]+$/, "Insira apenas números")
			.nullish(),
		complement: z.string().max(50).nullish()
	});

	type iAdress = z.infer<typeof addressFormSchame>;

	const reloadAddress = async () => {
		const { data } = await api.get(`/users/${uuidUser}`, {
			headers: { Authorization: `Barear ${token}` }
		});

		setUuidAddress(data.address.id);
		setZipCode(data.address.zipCode);
		setState(data.address.state);
		setCity(data.address.city);
		setDistrict(data.address.district);
		setStreet(data.address.street);
		setNumber(data.address.number);
		setComplement(data.address.complement);
	};

	useEffect(() => {
		reloadAddress();
	}, []);

	const updateAddress = async (data: iAdress) => {
		try {
			await api.patch(`/addresses/${uuidAddress}`, data, {
				headers: { Authorization: `Barear ${token}` }
			});
			toast({
				title: "sucess",
				message: `Sucesso`,
				position: "top-left",
				color: "green.500"
			});
			onClose();
			setTimeout(() => {
				navigate(0);
			}, 2000);
		} catch (error) {
			toast({
				title: "error",
				message: "Erro ao alterar",
				position: "top-left",
				color: "red.500"
			});
		}
	};

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors }
	} = useForm<iAdress>({ resolver: zodResolver(addressFormSchame.optional()) });

	return (
		<>
			<MenuItem onClick={onOpen}>Editar Endereço</MenuItem>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent maxW={"520px"}>
					<ModalHeader>Editar Endereço</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Heading as="h4" size={"9"} variant={"500"}>
							Informações de endereço
						</Heading>
						<InputForm
							id="7"
							type="number"
							label="CEP"
							placeholder="00000.000"
							register={register("zipCode")}
							error={errors?.zipCode}
							defaultValue={zipCode}
						/>
						<Flex gap={"11px"}>
							<InputForm
								id="8"
								type="text"
								label="Estado"
								placeholder="Digitar Estado"
								register={register("state")}
								error={errors?.state}
								defaultValue={state}
							/>
							<InputForm
								id="9"
								type="text"
								label="Cidade"
								placeholder="Digitar cidade"
								register={register("city")}
								error={errors?.city}
								defaultValue={city}
							/>
						</Flex>
						<InputForm
							id="10"
							type="text"
							label="Bairro"
							placeholder="Digitar bairro"
							register={register("district")}
							error={errors?.district}
							defaultValue={district}
						/>
						<InputForm
							id="12"
							type="text"
							label="Rua"
							placeholder="Digitar rua"
							register={register("street")}
							error={errors?.street}
							defaultValue={street}
						/>
						<Flex gap={"11px"}>
							<InputForm
								id="13"
								type="number"
								label="numero"
								placeholder="Digitar numero"
								register={register("number")}
								error={errors?.number}
								defaultValue={number}
							/>
							<InputForm
								id="14"
								type="text"
								label="Complemento"
								placeholder="Ex. apart 307"
								register={register("complement")}
								error={errors?.complement}
								defaultValue={complement}
							/>
						</Flex>
					</ModalBody>

					<ModalFooter gap={"10px"}>
						<Button onClick={onClose} variant={"negative"} size="2">
							Cancel
						</Button>
						<Button
							variant="brandOpacity"
							size="3"
							onClick={handleSubmit(updateAddress)}
						>
							Salvar Alteração
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ModalAddressUpdate;
