import {
	Box,
	Text,
	Badge,
	Image,
	Heading,
	Flex,
	Button,
	VStack
} from "@chakra-ui/react";

import AvatarTag from "../Avatar/AvatarTag";
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useUserContext } from "../../contexts/userContext";
import api from "../../services/api";
import EditCarModal from "../EditCarModal";

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
	const divCommum = { justifyContent: "space-between", px: "0.5rem" };
	const hoverCommum = { color: "brand.1", cursor: "pointer" };

	const { user, setUser } = useUserContext();
	const [editIsOpen, setEditIsOpen] = useState(false);

	useEffect(() => {
		const setInitialData = async () => {
			const uuid = localStorage.getItem("UUID@shopCar");

			const { data } = await api(`/users/${uuid}`, {
				headers: {
					Authorization: `Bearer ${localStorage.getItem("token@shopCar")}`
				}
			});
			setUser(data);
		};
		setInitialData();
	}, []);
	return (
		<Box
			id={id}
			gap="16px"
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
				borderColor="transparent"
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

				<AvatarTag name={owner.name} id={owner.id} />
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
