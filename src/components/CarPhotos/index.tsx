import { Flex } from "@chakra-ui/layout";
import { Heading, Image, useColorModeValue } from "@chakra-ui/react";

interface iCarPhotosProps {
	photos: Array<string> | undefined;
}
const CarPhotos = ({ photos }: iCarPhotosProps) => {
	const bgColor = useColorModeValue("grey.10", "grey.2");
	const bgImg = useColorModeValue("grey.7", "grey.1");

	return (
		<>
			<Flex
				as="section"
				w="100%"
				h="225px"
				flexDirection="column"
				justifyContent="space-around"
				padding="15px"
				borderRadius="3px"
				backgroundColor={bgColor}
			>
				<Heading as="h3" size="6" h="10%" variant="600" mb="5px">
					Fotos
				</Heading>
				<Flex
					justifyContent="space-around"
					flexWrap="wrap"
					alignItems="center"
					h="90%"
					gap={{ base: "16px", md: "0px", lg: "16px" }}
				>
					{photos?.map((photo, index) => (
						<Image
							key={index}
							src={photo}
							mb="8px"
							alt={`car image ${index + 1}`}
							maxWidth="30%"
							maxHeight="30%"
							borderRadius="5px"
							backgroundColor={bgImg}
						/>
					))}
				</Flex>
			</Flex>
		</>
	);
};

export default CarPhotos;
