import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Box,
	Button,
	Flex,
	Heading,
	IconButton,
	Text,
	VStack,
	useColorModeValue
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useUserContext } from "../../contexts/userContext";

import InputForm from "../../components/Input";
import NavLink from "../../components/NavLink";

import { iSendResetPasswordEmail } from "../../types/userForms";
import { sendResetPasswordSchema } from "../../schemas/userForms";
import { useState } from "react";
import ContainerForm from "../../components/ContainerForm";

const SendResetPasswordEmail = () => {
	const { requestResetPassword } = useUserContext();
	const [sucessMessage, setSucessMessage] = useState<string | null | undefined>(
		null
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, isSubmitting }
	} = useForm<iSendResetPasswordEmail>({
		resolver: zodResolver(sendResetPasswordSchema)
	});

	const submitData = async (data: iSendResetPasswordEmail) => {
		const message = await requestResetPassword(data);

		setSucessMessage(message);
	};

	const icColor = useColorModeValue("brand.1", "brand.2");

	return (
		<ContainerForm>
			{isSubmitted && sucessMessage ? (
				<VStack w="full" align="center" justifyContent="center" spacing="1rem">
					<CheckCircleIcon color={icColor} boxSize="3rem" />
					<Heading size="6">{sucessMessage}!</Heading>
					<Text size="2" textAlign="justify">
						Por favor, verifique seu e-mail.
					</Text>
				</VStack>
			) : (
				<VStack w="full" spacing="1rem">
					<NavLink path="/login" type="router">
						Voltar para Login
					</NavLink>
					<Box w="inherit" alignContent="start">
						<Heading
							size={{ base: "7", sm: "6", lg: "5" }}
							textAlign="start"
							mb="8px"
						>
							Redefinir Senha
						</Heading>
						<Text size={{ base: "2", lg: "1" }} textAlign="start">
							Ensira o e-mail cadastrado na sua conta e receba um link para
							redefinir sua senha.
						</Text>
					</Box>
					<Box
						mt="32px!important"
						onSubmit={handleSubmit(submitData)}
						as="form"
						w="inherit"
					>
						<InputForm
							id="email"
							type="email"
							label="Email"
							error={errors.email}
							register={register("email")}
							placeholder="Digitar email"
						/>

						<Button
							mt="16px"
							type="submit"
							variant="brand1"
							w="full"
							h="48px"
							isLoading={isSubmitting}
						>
							Enviar Link
						</Button>
					</Box>
				</VStack>
			)}
		</ContainerForm>
	);
};

export default SendResetPasswordEmail;
