import { z } from "zod";
import { useForm } from "react-hook-form";
import NavLink from "../../components/NavLink";
import InputForm from "../../components/Input";
import { VStack, Text } from "@chakra-ui/layout";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import { useUserContext } from "../../contexts/userContext";

const Login = () => {
    const { login } = useUserContext();

    const formLoginSchame = z.object({
        email: z.string().email("Digite um email válido"),
        password: z.string(),
    });

    type iUserLogin = z.infer<typeof formLoginSchame>;

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<iUserLogin>({ resolver: zodResolver(formLoginSchame) });

    return (
        <VStack
            minH="100vh"
            pt="60px"
            px={{ base: "16px", xs: "22px", lg: "28px" }}
            flex="flex"
            justifyContent="center"
            alignContent="center"
            bg={useColorModeValue("gray.100", "grey.1")}
        >
            <Flex
                bg={useColorModeValue("white", "grey.1")}
                my="32px"
                py="40px"
                px="28px"
                gap="10px"
                borderRadius="4px"
                w={{ base: "full", xs: "300px", lg: "412px" }}
                justifyContent="center"
                border="1px solid"
                borderColor="grey.7"
                flexDirection="column"
            >
                <Heading size="5" w="full" textAlign="start" mb="16px">
                    Login
                </Heading>
                <VStack
                    gap="10px"
                    onSubmit={handleSubmit(login)}
                    as="form"
                    w="full"
                >
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
                    <Button type="submit" variant="brand1" w="full" h="48px">
                        Entrar
                    </Button>
                    <Text size="2" variant="400">
                        Ainda não possui conta?
                    </Text>
                    <NavLink path="register" type="router" variant="outline">
                        Cadastrar
                    </NavLink>
                </VStack>
            </Flex>
        </VStack>
    );
};

export default Login;
