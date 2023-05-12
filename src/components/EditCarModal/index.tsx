import {
	Button,
	Flex,
	FormLabel,
	Heading,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Select
} from "@chakra-ui/react";
import { iEditCarModal } from "../../types/compoments";
import InputForm from "../Input";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useToastForm } from "../../contexts/toastContext";
import { z } from "zod";
import { useCarContext } from "../../contexts/carContext";
import { iCar, iCarResponse } from "../../types/cars.type";
import { useNavigate } from "react-router-dom";

const EditCarModal = ({
	editIsOpen,
	setEditIsOpen,
	carData
}: iEditCarModal) => {
	const navigate = useNavigate();
	const { toast } = useToastForm();

	const formSchame = z
		.object({
			brand: z.string(),
			model: z.string(),
			year: z.string(),
			fuel: z.string(),
			km: z.string().regex(/^[0-9]+$/, "Km deve conter apenas números"),
			color: z.string().min(2, "Cor é obrigatório"),
			description: z.string().optional(),
			price: z.string().regex(/^[0-9]+$/, "Preço deve conter apenas números"),
			priceFipe: z.string(),
			cover: z.string().min(5, "imagem é obrigatória"),
			gallery: z.array(z.string().min(5, "imagem é obrigatória"))
		})
		.partial();

	type iEditCar = z.infer<typeof formSchame>;

	const { brands, cars, setCars, getCarsByBrand } = useCarContext();
	const [car, setCar] = useState<any | null>(carData);
	const [imgCount, setImgCount] = useState([0, 1]);
	const [newImgCount, setNewImgCount] = useState<number[]>([]);

	useEffect(() => {
		const getCarsData = async () => {
			try {
				await getCarsByBrand(carData?.brand).then(res => {
					setCars(res);
					return res;
				});
				let newImageCount = [];
				const carImages = String(carData?.images.gallery)
					.replace(/[}"\{]/g, "")
					.split(",");
				for (let j = 0; j < carImages.length; j++) {
					newImageCount.push(j);
				}
				setImgCount(newImageCount);
			} catch (error) {
				console.log(error);
			}
		};
		getCarsData();
	}, [editIsOpen]);

	const {
		register,
		handleSubmit,
		formState: { errors }
	} = useForm<iEditCar>({ resolver: zodResolver(formSchame) });

	const onSubmit = async (data: any) => {
		try {
			const { priceFipe, ...newData } = data;
			const token = localStorage.getItem("token@shopCar");
			const resp = await api.patch(
				`/cars/${carData.id}`,
				{
					...newData,
					km: Number(data.km),
					price: Number(data.price)
				},
				{
					headers: {
						Authorization: `Bearer ${token}`
					}
				}
			);
			if (resp.status === 200) {
				toast({
					title: "sucess",
					message: `Anúncio criado`,
					position: "top-left",
					color: "green.500"
				});
				setEditIsOpen(false);
				setNewImgCount([]);
				setImgCount([0, 1]);
				navigate(0);
			} else {
				toast({
					title: "error",
					message: `Error api`,
					position: "top-left",
					color: "red.500"
				});
			}
		} catch (error: any) {
			toast({
				title: "error",
				message: `${error.response.data.message}`,
				position: "top-left",
				color: "red.500"
			});
			console.log(error);
		}
	};

	return (
		<>
			<Modal
				isOpen={editIsOpen}
				onClose={() => {
					setEditIsOpen(false);
				}}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Editar anúncio</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<Flex
							borderRadius="lg"
							minWidth={"343px"}
							maxWidth={"411px"}
							py={"10px"}
							px={"48px"}
							flexDirection={"column"}
							gap={"16px"}
						>
							<Heading as="h4" size={"9"} variant={"500"}>
								Informações do veículo
							</Heading>
							<FormLabel htmlFor="brandsSelect">Marca</FormLabel>
							<Select
								{...register("brand")}
								id="brandsSelect"
								onChange={async e => {
									await getCarsByBrand(e.target.value).then(res => {
										setCars(res);
										const initialCar = res.filter(
											elem => elem.name === res[0].name
										)[0];
										setCar(initialCar);
									});
								}}
							>
								{brands ? (
									brands.map((brand: string) => (
										<option
											key={brand}
											value={brand}
											selected={brand == carData?.brand}
										>
											{brand}
										</option>
									))
								) : (
									<option>Selecione uma marca</option>
								)}
							</Select>
							<FormLabel htmlFor="modelsSelect">Modelo</FormLabel>
							<Select
								{...register("model")}
								id="modelsSelect"
								onChange={async e => {
									const currentCar = cars!.filter(
										elem => elem.name === e.target.value
									)[0];
									setCar(currentCar);
								}}
							>
								{cars ? (
									cars.map((car: iCar) => (
										<option
											key={car.id}
											value={car.name}
											selected={car.name == carData?.model}
										>
											{car.name}
										</option>
									))
								) : (
									<option>Selecione um modelo</option>
								)}
							</Select>
							<Flex gap={"11px"}>
								<InputForm
									value={car?.year}
									readOnly={true}
									id="3"
									type="number"
									label="Ano"
									placeholder="Ano"
									register={register("year")}
									error={errors.year}
								/>
								<InputForm
									value={
										car?.fuel == 1
											? "Flex"
											: car?.fuel == 2
											? "Híbrido"
											: car?.fuel == 3
											? "Elétrico"
											: car?.fuel
									}
									readOnly={true}
									id="4"
									type="text"
									label="Combustível"
									placeholder="Combustível"
									register={register("fuel")}
									error={errors.fuel}
								/>
							</Flex>
							<Flex gap={"11px"}>
								<InputForm
									id="5"
									defaultValue={String(parseInt(carData?.km))}
									type="text"
									label="Quilometragem"
									placeholder={carData?.km}
									register={register("km")}
									error={errors.km}
								/>
								<InputForm
									id="6"
									type="text"
									defaultValue={carData?.color}
									label="Cor"
									placeholder={carData?.color}
									register={register("color")}
									error={errors.color}
								/>
							</Flex>
							<Flex gap={"11px"}>
								<InputForm
									value={car?.value ? car.value : "-"}
									readOnly={true}
									id="7"
									type="text"
									label="Preço tabela FIPE"
									placeholder="Preço tabela FIPE"
									register={register("priceFipe")}
									error={errors.priceFipe}
								/>
								<InputForm
									id="8"
									type="text"
									defaultValue={String(parseInt(carData?.price))}
									label="Preço"
									placeholder={carData?.price}
									register={register("price")}
									error={errors.price}
								/>
							</Flex>
							<InputForm
								id="9"
								type="text"
								label="Descrição"
								defaultValue={carData?.description!}
								placeholder={carData?.description!}
								register={register("description")}
								error={errors.description}
							/>
							<InputForm
								id="10"
								type="text"
								label="Imagem de capa"
								defaultValue={carData?.images.cover}
								placeholder={carData?.images.cover}
								register={register("cover")}
								error={errors.cover}
							/>
							{String(carData?.images.gallery)
								.replace(/[}"\{]/g, "")
								.split(",")
								.map((imageUrl: string, i, array) => {
									return (
										<InputForm
											id={`${11 + i}`}
											key={`${11 + i}`}
											type="text"
											defaultValue={imageUrl}
											label={`${1 + i}ª imagem da galeria`}
											placeholder={imageUrl}
											register={register(`gallery.${i}`)}
											error={errors.gallery}
										/>
									);
								})}
							{imgCount.length + newImgCount.length <= 6 &&
								newImgCount.map(i => (
									<InputForm
										id={`${11 + newImgCount.length + i}`}
										key={`${11 + newImgCount.length + i}`}
										type="text"
										label={`${imgCount.length + i + 1}ª imagem da galeria`}
										placeholder="Insira o link da imagem"
										register={register(`gallery.${imgCount.length + i}`)}
										error={errors.gallery}
									/>
								))}
							<Button
								variant={"brandOpacity"}
								size={"big"}
								p={"10px"}
								disabled={
									imgCount.length + newImgCount.length === 6 ? true : false
								}
								onClick={() => {
									const count = newImgCount.length;
									if (imgCount.length + newImgCount.length < 6) {
										setNewImgCount([...newImgCount, count]);
									}
								}}
							>
								Adicionar imagem
							</Button>
						</Flex>
					</ModalBody>

					<ModalFooter>
						<Button
							type="submit"
							onClick={async () => {
								const token = localStorage.getItem("token@shopCar");
								await api.delete(`/cars/${carData?.id}`, {
									headers: {
										Authorization: `Bearer ${token}`
									}
								});
								setEditIsOpen(false);
								navigate(0);
							}}
							variant="negative"
							size={"big"}
							mr={3}
							p={"10px"}
						>
							Excluir anúncio
						</Button>
						<Button
							variant="brand1"
							size={"big"}
							p={"10px"}
							onClick={handleSubmit(onSubmit)}
						>
							Salvar alterações
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
export default EditCarModal;
