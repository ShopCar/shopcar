import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Box,
	Text,
	Flex,
	Badge,
	Image,
	Button,
	VStack,
	Heading,
	useColorModeValue
} from "@chakra-ui/react";

import AvatarTag from "../Avatar/AvatarTag";
import EditCarModal from "../EditCarModal";
import { useUserContext } from "../../contexts/userContext";

interface iPropertyProps {
	id?: string;
	km: string;
	car?: any;
	year: number;
	imageUrl: string;
	imageAlt: string;
	carTitle: string;
	sellerName?: string;
	formattedPrice: string;
	carDescription: string;
	buttons?: boolean;
	padding?: string;
	owner: {
		name: string;
		id: string;
	};
}

const ProductCard = ({
	id,
	car,
	km,
	owner,
	year,
	imageUrl,
	imageAlt,
	carTitle,
	carDescription,
	formattedPrice,
	padding,
	buttons
}: iPropertyProps) => {
	const navigate = useNavigate();
	const boxCardConfig = {
		"&:hover": {
			shadow: "lg",
			"figure:first-of-type": {
				borderColor: "brand.1",
				transition: "all 0.5s ease-out"
			}
		}
	};
	const bdColor = useColorModeValue("grey.8", "grey.2");
	const color = useColorModeValue("brand.1", "brand.3");
	const bgCommum = useColorModeValue("grey.10", "grey.2");
	const hoverCommum = {
		color,
		cursor: "pointer"
	};
	const divCommum = { justifyContent: "space-between", px: "0.5rem" };

	const { user, setUser } = useUserContext();
	const [editIsOpen, setEditIsOpen] = useState(false);

	return (
		<Box
			id={id}
			gap="16px"
			bg={bgCommum}
			width="270px"
			height="390px"
			display="flex"
			flexDir="column"
			overflow="hidden"
			sx={boxCardConfig}
			margin={padding}
		>
			<Box
				as="figure"
				maxW="100%"
				display="flex"
				height="152px"
				border="2px solid"
				justifyContent="center"
				borderColor={bdColor}
				onClick={() => navigate(`/cars/${id}`)}
			>
				<Image src={imageUrl} alt={imageAlt} title={imageAlt} />
			</Box>
			<VStack
				w="inherit"
				h="135px"
				gap="0.5rem"
				alignItems="flex-start"
				px="0.5rem"
			>
				<Heading
					size="7"
					h="20px"
					w="100%"
					variant="600"
					overflow="hidden"
					whiteSpace="nowrap"
					_hover={hoverCommum}
					textOverflow="ellipsis"
					onClick={() => navigate(`/cars/${id}`)}
				>
					{carTitle}
				</Heading>

				<Text
					size="2"
					w="100%"
					h="50px"
					variant="400"
					display="flex"
					overflow="hidden"
					mt="0px!important"
					alignItems="center"
					whiteSpace="nowrap"
					textOverflow="ellipsis"
				>
					{carDescription}
				</Text>

				<AvatarTag
					name={owner.name}
					id={owner.id}
					color={owner.id === user?.id ? "brand.1" : ""}
				/>
			</VStack>
			<Flex maxW="100%" alignItems="center" {...divCommum}>
				<Flex gap="12px" h="24px">
					<Badge p="0 4px" variant="opacity">
						{km}
					</Badge>
					<Badge p="0 4px" variant="opacity">
						{year}
					</Badge>
				</Flex>

				<Heading size="7" variant="500" marginRight="3px">
					{formattedPrice}
				</Heading>
			</Flex>
			{buttons && owner.id === localStorage.getItem("UUID@shopCar") && (
				<Flex {...divCommum} mt="-6px" alignItems="flex-start">
					<Button
						p="5px"
						variant="outline1"
						onClick={() => setEditIsOpen(true)}
					>
						Editar
					</Button>
					<Button
						p="5px"
						variant="outline1"
						onClick={() => navigate(`/cars/${id}`)}
					>
						Ver detalhes
					</Button>
				</Flex>
			)}
			<EditCarModal
				carData={car}
				setEditIsOpen={setEditIsOpen}
				editIsOpen={editIsOpen}
			/>
		</Box>
	);
};

export default ProductCard;
