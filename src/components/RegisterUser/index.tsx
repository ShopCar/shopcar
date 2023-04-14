import { Box, Button, Heading } from "@chakra-ui/react";
import InputForm from "../Input";
import { TypeOf, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const RegisterUser = () => {
  const addressFormSchame = z.object({
    zipCode: z
      .string()
      .length(8)
      .regex(/^[0-9]+$/, "Zip Code must contain only numbers"),
    state: z
      .string()
      .length(2)
      .regex(/^[A-Za-z]+$/),
    city: z.string().max(50),
    street: z.string().max(50),
    number: z
      .string()
      .max(10)
      .regex(/^[0-9]+$/, "Phone number must contain only numbers")
      .nullish(),
    complement: z.string().max(50).nullish(),
  });

  const formSchame = z.object({
    name: z.string(),
    email: z.string().email(),
    cpf: z.number().min(11).max(11),
    phone: z
      .string()
      .min(11)
      .max(14)
      .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
    birthdate: z.string().datetime(),
    description: z.string().nullish(),
    address: addressFormSchame,
  });

  type iUserRegister = z.infer<typeof formSchame>;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iUserRegister>({ resolver: zodResolver(formSchame) });

  const onSubmit = async () => {};

  return (
    <>
      <Box
        marginTop={46}
        borderWidth="1px"
        borderRadius="lg"
        minWidth={343}
        maxWidth={411}
      >
        <Heading as="h3" size={"8"} variant={"500"}>
          Cadastro
        </Heading>
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
        />
        <InputForm
          id="2"
          type="text"
          label="Email"
          placeholder="Ex: samuel@kenzie.com.br"
          register={register("email")}
          error={errors.email}
        />
        <InputForm
          id="2"
          type="text"
          label="CPF"
          placeholder="000.000.000-00"
          register={register("cpf")}
          error={errors.cpf}
        />
        <InputForm
          id="2"
          type="text"
          label="Celular"
          placeholder="(DDD) 98765-4321"
          register={register("phone")}
          error={errors.phone}
        />
        <InputForm
          id="2"
          type="date"
          label="Data de Nascimento"
          placeholder="00/00/00"
          register={register("birthdate")}
          error={errors.birthdate}
        />
        <Button variant={"alert"} size={"2"}>
          Cadastrar
        </Button>
      </Box>
    </>
  );
};

export default RegisterUser;
