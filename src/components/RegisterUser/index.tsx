import { Box, Button, Flex, Heading, VStack } from "@chakra-ui/react";
import InputForm from "../Input";
import { TypeOf, z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import api from "../../services/api";

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

  const formSchame = z
    .object({
      name: z.string(),
      email: z.string().email(),
      cpf: z.string().min(11).max(11),
      password: z
        .string()
        .min(8)
        .regex(
          /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
          "Password must contains capital letter, lowercase letter, number and special char"
        ),
      passwordRepeat: z.string(),
      phone: z
        .string()
        .min(11)
        .max(14)
        .regex(/^[0-9]+$/, "Phone number must contain only numbers"),
      birthdate: z.string(),
      description: z.string().nullish(),
      isSeller: z.boolean(),
      address: addressFormSchame,
    })
    .refine((data) => data.password === data.passwordRepeat, {
      message: "A senha não corresponde",
      path: ["passwordRepeat"],
    });

  type iUserRegister = z.infer<typeof formSchame>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegister>({ resolver: zodResolver(formSchame) });

  const onSubmit = async (data: any) => {
    console.log(data);
    // try {
    //   await api.post("/users", data);
    // } catch (error) {
    //   console.log(error);
    // }
  };

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
        <VStack as={"form"} onSubmit={handleSubmit(onSubmit)}>
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
            id="3"
            type="number"
            label="CPF"
            placeholder="000.000.000-00"
            register={register("cpf")}
            error={errors.cpf}
          />
          <InputForm
            id="4"
            type="text"
            label="Celular"
            placeholder="(DDD) 98765-4321"
            register={register("phone")}
            error={errors.phone}
          />
          <InputForm
            id="5"
            type="date"
            label="Data de Nascimento"
            placeholder="00/00/0000"
            register={register("birthdate")}
            error={errors.birthdate}
          />
          <InputForm
            id="6"
            type="text"
            label="Descrição"
            placeholder="Digitar descrição"
            register={register("description")}
            error={errors.description}
          />
          <Heading as="h4" size={"9"} variant={"500"}>
            Informações de endereço
          </Heading>
          <InputForm
            id="7"
            type="number"
            label="CEP"
            placeholder="00000.000"
            register={register("address.zipCode")}
            error={errors.address?.zipCode}
          />
          <Flex>
            <InputForm
              id="8"
              type="text"
              label="Estado"
              placeholder="Digitar Estado"
              register={register("address.state")}
              error={errors.address?.state}
            />
            <InputForm
              id="9"
              type="text"
              label="Cidade"
              placeholder="Digitar cidade"
              register={register("address.city")}
              error={errors.address?.city}
            />
          </Flex>
          <InputForm
            id="10"
            type="text"
            label="Rua"
            placeholder="Digitar rua"
            register={register("address.street")}
            error={errors.address?.street}
          />
          <Flex>
            <InputForm
              id="11"
              type="number"
              label="numero"
              placeholder="Digitar numero"
              register={register("address.number")}
              error={errors.address?.number}
            />
            <InputForm
              id="12"
              type="text"
              label="Complemento"
              placeholder="Ex. apart 307"
              register={register("address.complement")}
              error={errors.address?.complement}
            />
          </Flex>
          <Heading as="h4" size={"9"} variant={"500"}>
            Tipo da conta
          </Heading>
          <Flex justifyContent={"space-between"}>
            <Button variant={"alert"} size={"2"} value={"false"}>
              Comprador
            </Button>{" "}
            <Button variant={"alert"} size={"2"} value={"true"}>
              Anuciante
            </Button>
          </Flex>
          <InputForm
            id="13"
            type="password"
            label="Senha"
            placeholder="Digitar senha"
            register={register("password")}
            error={errors.password}
          />
          <InputForm
            id="14"
            type="password"
            label="Confirmar Senha"
            placeholder="Digite novamente a senha"
            register={register("passwordRepeat")}
            error={errors.passwordRepeat}
          />

          <Button type="submit" variant={"alert"} size={"2"}>
            Cadastrar
          </Button>
        </VStack>
      </Box>
    </>
  );
};

export default RegisterUser;
