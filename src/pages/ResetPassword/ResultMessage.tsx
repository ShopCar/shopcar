import { CheckCircleIcon, WarningTwoIcon } from "@chakra-ui/icons";
import { Heading, Text, VStack, useColorModeValue } from "@chakra-ui/react";

import { iResultMessageProps } from "../../types/compoments";

const ResultMessage = ({
	type,
	text,
	style,
	children
}: iResultMessageProps) => {
	const vConfig = {
		w: "full",
		align: "center",
		spacing: "1rem",
		justifyContent: "center"
	};

	const icConfig = {
		boxSize: "3rem",
		color: useColorModeValue("brand.1", "brand.2")
	};

	return (
		<>
			{type == "success" && (
				<>
					{style == "doble" && (
						<VStack {...vConfig}>
							<CheckCircleIcon {...icConfig} />
							<Heading size="6" textAlign="center">
								{children}
							</Heading>
							<Text size="2" textAlign="justify" mt="1rem">
								{text ? text : "Por favor, tente novamente mais tarde."}
							</Text>
						</VStack>
					)}

					{style == "single" && (
						<VStack {...vConfig}>
							<CheckCircleIcon {...icConfig} />
							<Heading size="6" textAlign="center">
								{children}
							</Heading>
						</VStack>
					)}
				</>
			)}

			{type == "error" && (
				<>
					{style == "doble" && (
						<VStack {...vConfig}>
							<WarningTwoIcon {...icConfig} />
							<Heading size="6" textAlign="center">
								{children}
							</Heading>
							<Text size="2" textAlign="justify" mt="1rem">
								{text ? text : "Por favor, tente novamente mais tarde."}
							</Text>
						</VStack>
					)}

					{style == "single" && (
						<VStack {...vConfig}>
							<WarningTwoIcon {...icConfig} />
							<Heading size="6" textAlign="center">
								{children}
							</Heading>
						</VStack>
					)}
				</>
			)}
		</>
	);
};

export default ResultMessage;
