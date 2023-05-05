import { Flex } from "@chakra-ui/layout";
import { Heading, Image } from '@chakra-ui/react'

interface iCarPhotosProps {
	photos: Array<string> | undefined;
}
const CarPhotos = ({photos}: iCarPhotosProps) => {
	return (
		<>
			<Flex
				as="section"
				w="25%"
				h="250px"
				flexDirection="column"
				justifyContent="space-around"
				padding="15px"
				borderRadius="3px"
				backgroundColor="grey.10"
			>
				<Heading
					as="h3"
					size="6"
					h="10%"
					variant="600"
				>
					Fotos
				</Heading>
				<Flex
					justifyContent="space-around"
					flexWrap="wrap"
					alignItems="center"
					h="90%"
				>
					{photos?.map((photo, index) => (
						<Image
						key={index}
						src={photo}
						alt={`car image ${index+1}`}
						maxWidth="30%"
						maxHeight="30%"
						borderRadius="5px"
						backgroundColor="grey.7"
					/>
					))}
					
				</Flex>
				
			</Flex>
		</>
	);
};

export default CarPhotos;