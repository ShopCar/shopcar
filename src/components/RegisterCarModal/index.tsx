import {
  Button,
  Flex,
  FormLabel,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";
import { iRegisterCarModal } from "../../types/compoments";
import InputForm from "../Input";
import api from "../../services/api";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useToastForm } from "../../contexts/toastContext";
import { z } from "zod";
import { useCarContext } from "../../contexts/carContext";
import { iCar } from "../../types/cars.type";
import ImageUpload from "../InputImageFile";

const RegisterCarModal = ({ isOpen, setIsOpen }: iRegisterCarModal) => {
  const { toast } = useToastForm();

  const formSchame = z.object({
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
    gallery: z.array(z.string().min(5, "imagem é obrigatória")).max(6),
  });

  type iCarRegister = z.infer<typeof formSchame>;

  const { brands, cars, setCars, getCarsByBrand } = useCarContext();
  const [car, setCar] = useState<iCar | null>(cars ? cars[0] : null);
  const [imgCount, setImgCount] = useState([0, 1]);
  const [photoCover, setPhotoCover] = useState("");

  useEffect(() => {
    console.log(photoCover);
  }, [photoCover]);

  useEffect(() => {
    const getCarsData = async () => {
      try {
        await getCarsByBrand("chevrolet").then((res) => {
          setCars(res);
          const initialCar = res.filter((elem) => elem.name === res[0].name)[0];
          setCar(initialCar);
          return res;
        });
      } catch (error) {
        console.log(error);
      }
    };
    getCarsData();
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<iCarRegister>({ resolver: zodResolver(formSchame) });

  const onSubmit = async (data: any) => {
    try {
      const token = localStorage.getItem("token@shopCar");
      const resp = await api.post(
        "/cars",
        {
          ...data,
          km: Number(data.km),
          price: Number(data.price),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (resp.status === 201) {
        toast({
          title: "sucess",
          message: `Anúncio criado`,
          position: "top-left",
          color: "green.500",
        });
        setIsOpen(false);
      } else {
        toast({
          title: "error",
          message: `Error api`,
          position: "top-left",
          color: "red.500",
        });
      }
    } catch (error: any) {
      toast({
        title: "error",
        message: `${error.response.data.message}`,
        position: "top-left",
        color: "red.500",
      });
    }
  };
  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Criar anúncio</ModalHeader>
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
                onChange={async (e) => {
                  await getCarsByBrand(e.target.value).then((res) => {
                    setCars(res);
                    const initialCar = res.filter(
                      (elem) => elem.name === res[0].name
                    )[0];
                    setCar(initialCar);
                  });
                }}
              >
                {brands ? (
                  brands.map((brand: string) => (
                    <option key={brand} value={brand}>
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
                onChange={async (e) => {
                  const currentCar = cars!.filter(
                    (elem) => elem.name === e.target.value
                  )[0];
                  setCar(currentCar);
                }}
              >
                {cars ? (
                  cars.map((car: iCar) => (
                    <option key={car.id} value={car.name}>
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
                      : "Combustível"
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
                  type="text"
                  label="Quilometragem"
                  placeholder="150000"
                  register={register("km")}
                  error={errors.km}
                />
                <InputForm
                  id="6"
                  type="text"
                  label="Cor"
                  placeholder="Azul"
                  register={register("color")}
                  error={errors.color}
                />
              </Flex>
              <Flex gap={"11px"}>
                <InputForm
                  value={Number(car?.value)}
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
                  label="Preço"
                  placeholder="Preço"
                  register={register("price")}
                  error={errors.price}
                />
              </Flex>
              <InputForm
                id="9"
                type="text"
                label="Descrição"
                placeholder="Insira aqui a descrição"
                register={register("description")}
                error={errors.description}
              />
              <InputForm
                id="10"
                type="text"
                label="Imagem de capa"
                placeholder="Link da foto de capa"
                register={register("cover")}
                error={errors.cover}
              />
              <ImageUpload fcnt={(value: string) => setValue("cover", value)} />
              {imgCount.map((i) => (
                <>
                  <InputForm
                    id={`${11 + i}`}
                    key={`${11 + i}`}
                    type="text"
                    label={`${1 + i}ª imagem da galeria`}
                    placeholder={`Link da ${1 + i}ª imagem`}
                    register={register(`gallery.${i}`)}
                    error={errors.gallery}
                  />
                  <ImageUpload
                    fcnt={(value: string) => setValue(`gallery.${i}`, value)}
                  />
                </>
              ))}
              <Button
                variant={"brandOpacity"}
                size={"big"}
                p={"10px"}
                onClick={() => {
                  const count = imgCount.length;
                  if (count < 6) {
                    setImgCount([...imgCount, count]);
                  }
                }}
              >
                Adicionar imagem
              </Button>
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button
              variant="negative"
              size={"big"}
              p={"10px"}
              mr={3}
              onClick={() => {
                setIsOpen(false);
              }}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              onClick={handleSubmit(onSubmit)}
              variant="brand1"
              size={"big"}
              p={"10px"}
            >
              Criar anúncio
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
export default RegisterCarModal;
