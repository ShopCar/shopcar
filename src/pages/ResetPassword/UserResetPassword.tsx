import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
	Box,
	Button,
	Flex,
	Heading,
	Text,
	VStack,
	useColorModeValue
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";

import { useUserContext } from "../../contexts/userContext";

import InputForm from "../../components/Input";
import NavLink from "../../components/NavLink";

import { iUserResetPassword } from "../../types/userForms";
import { userResetPasswordSchema } from "../../schemas/userForms";
import ContainerForm from "../../components/ContainerForm";

const UserResetPassword = () => {
	const { userResetPassword } = useUserContext();
	const [sucessMessage, setSucessMessage] = useState<string | null | undefined>(
		null
	);

	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitted, isSubmitting }
	} = useForm<iUserResetPassword>({
		resolver: zodResolver(userResetPasswordSchema)
	});

	const submitData = async (data: iUserResetPassword) => {
		const message = await userResetPassword(data);

		setSucessMessage(message);
	};

	const icColor = useColorModeValue("brand.1", "brand.2");

	return (
		<ContainerForm>
			{isSubmitted && sucessMessage ? (
				<VStack w="full" align="center" justifyContent="center" spacing="1rem">
					<CheckCircleIcon color={icColor} boxSize="3rem" />
					<Heading size="6">{sucessMessage}!</Heading>
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
							Redefinição de Senha
						</Heading>
					</Box>
					<Box
						mt="32px!important"
						onSubmit={handleSubmit(submitData)}
						as="form"
						w="inherit"
					>
						<VStack spacing="24px">
							<InputForm
								id="password"
								type="password"
								label="Senha"
								error={errors.password}
								register={register("password")}
								placeholder="••••••"
							/>

							<InputForm
								id="confirmPassword"
								type="password"
								label="Confirmar Senha"
								error={errors.confirmPassword}
								register={register("confirmPassword")}
								placeholder="••••••"
							/>
						</VStack>

						<Button
							mt="32px"
							type="submit"
							variant="brand1"
							w="full"
							h="48px"
							isLoading={isSubmitting}
						>
							Redefinir senha
						</Button>
					</Box>
				</VStack>
			)}
		</ContainerForm>
	);
};

export default UserResetPassword;
