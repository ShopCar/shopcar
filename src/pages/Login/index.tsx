import { VStack, Text } from "@chakra-ui/layout";
import InputForm from "../../components/Input";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Flex, HStack, Heading } from "@chakra-ui/react";
import api from "../../services/api";
import NavLink from "../../components/NavLink";

export interface ILoginForm {
    email: string;
    password: string;
}

const Login = () => {
    const [token, setToken] = useState<string | null>(null);

    const login = async (data: any) => {
        try {
            const token = await api.post("/login", data);
            console.log(token.data.token);
            setToken(token.data.token);
        } catch (error) {
            console.log(error);
        }
    };

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ILoginForm>();

    return (
        <VStack
            gap="4"
            minH="100vh"
            pt="60px"
            flex="flex"
            justifyContent="center"
            alignContent="center"
            bg="gray.100"
        >
            <Flex
                bg="white"
                py="40px"
                px="42px"
                gap="10px"
                borderRadius="4px"
                maxW="90%"
                minW="412px"
                justifyContent="center"
            >
                <VStack onSubmit={handleSubmit(login)} as="form" w="full">
                    <Heading size="5" w="full" textAlign="start" mb="16px">
                        Login
                    </Heading>
                    <VStack gap="10px" mt="32px" w="full">
                        <InputForm
                            id="email"
                            type="email"
                            label="Email"
                            error={errors.email}
                            register={register("email")}
                            placeholder="Digitar email"
                        />
                        <InputForm
                            id="password"
                            type="password"
                            label="Senha"
                            error={errors.password}
                            register={register("password")}
                            placeholder="Digitar senha"
                        />
                    </VStack>
                    <Text size="2" w="full" textAlign="end" mt="9px">
                        Esqueci minha senha
                    </Text>
                    <VStack mt="21px" gap="24px" w="full">
                        <Button
                            type="submit"
                            variant="brand1"
                            w="full"
                            h="48px"
                        >
                            Entrar
                        </Button>
                        <Text size="2" variant="400">
                            Ainda não possui conta?
                        </Text>
                        <NavLink
                            path="register"
                            type="router"
                            variant="outline"
                        >
                            Cadastrar
                        </NavLink>
                    </VStack>
                </VStack>
            </Flex>
        </VStack>
    );
};

export default Login;
