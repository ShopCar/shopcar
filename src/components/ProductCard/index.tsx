import {
	Box,
	Text,
	Badge,
	Image,
	Heading,
	useColorModeValue
} from "@chakra-ui/react";

import AvatarTag from "../Avatar/AvatarTag";

interface iPropertyProps {
	km: string;
	year: number;
	imageUrl: string;
	imageAlt: string;
	carTitle: string;
	sellerName?: string;
	formattedPrice: string;
	carDescription: string;
}

const ProductCard = ({
	km,
	year,
	imageUrl,
	imageAlt,
	carTitle,
	carDescription,
	formattedPrice
}: iPropertyProps) => {
	const boxCardConfig = {
		"&:hover": {
			cursor: "pointer",
			"div:first-of-type": {
				borderColor: "brand.1",
				transition: "all 0.5s ease-out"
			}
		}
	};

	return (
		<Box
			gap="16px"
			width="270px"
			height="350px"
			display="flex"
			flexDir="column"
			overflow="hidden"
			sx={boxCardConfig}
		>
			<Box
				maxW="100%"
				display="flex"
				height="152px"
				border="2px solid"
				justifyContent="center"
				borderColor="transparent"
				bgColor={useColorModeValue("grey.7", "grey.7")}
			>
				<Image maxW="262px" src={imageUrl} alt={imageAlt} />
			</Box>
			<Heading size="7" variant="600">
				{carTitle}
			</Heading>

			<Text size="2" variant="400">
				{carDescription}
			</Text>

			<AvatarTag name="Samuel Leão" />

			<Box maxW="100%" display="flex" justifyContent="space-between">
				<Box display="flex" gap="12px">
					<Badge variant="opacity">{km}</Badge>
					<Badge variant="opacity">{year}</Badge>
				</Box>

				<Heading size="7" variant="500" marginRight="3px">
					{formattedPrice}
				</Heading>
			</Box>
		</Box>
	);
};

export default ProductCard;
