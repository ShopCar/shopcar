import { Avatar, useChakra, Text, HStack } from "@chakra-ui/react";

const AvatarProfile = () => {
	const { theme } = useChakra();

	const colors = Object.keys(theme.colors.profile);
	const randomIndex = randomNumber(colors.length);

	const profileColor = `profile.${colors[randomIndex]}`;

	return (
		<>
			<Avatar
				name="Vivy Ribeiro"
				size="sm"
				backgroundColor={`${profileColor}`}
			></Avatar>
			<HStack gap="8px">
				<Avatar
					name="Vivy Ribeiro"
					size="sm"
					backgroundColor={profileColor}
				></Avatar>
				<Text size="2" variant="500">
					Anunciante
				</Text>
			</HStack>
		</>
	);
};

const randomNumber = (max: number) => {
	return Math.floor(Math.random() * max + 1);
};

export default AvatarProfile;
