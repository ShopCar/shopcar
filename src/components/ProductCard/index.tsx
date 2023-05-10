import {
	Box,
	Text,
	Badge,
	Image,
	Heading,
	Flex,
	Button
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
			cursor: "pointer",
			"div:first-of-type": {
				borderColor: "brand.1",
				transition: "all 0.5s ease-out"
			}
		}
	};

	const { user, setUser } = useUserContext();
	const [editIsOpen, setEditIsOpen] = useState(false)

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
			height="420px"
			display="flex"
			flexDir="column"
			overflow="hidden"
			sx={boxCardConfig}
			padding={padding}
		>
			<Box
				as="figure"
				maxW="100%"
				display="flex"
				height="152px"
				border="2px solid"
				justifyContent="center"
				borderColor="transparent"
				bgColor="grey.7"
				onClick={() => navigate(`/cars/${id}`)}
			>
				<Image maxW="262px" src={imageUrl} alt={imageAlt} />
			</Box>
			<Heading
				size="7"
				variant="600"
				h="20px"
				textOverflow="ellipsis"
				overflow="hidden"
				whiteSpace="nowrap"
				onClick={() => navigate(`/cars/${id}`)}
			>
				{carTitle}
			</Heading>

			<Text
				size="2"
				variant="400"
				h="48px"
				display="flex"
				alignItems="center"
				textOverflow="ellipsis"
				whiteSpace="nowrap"
				overflow="hidden"
			>
				{carDescription}
			</Text>

			<AvatarTag name={owner.name} id={owner.id} />

			<Box maxW="100%" display="flex" justifyContent="space-between">
				<Box display="flex" gap="12px">
					<Badge p="0" variant="opacity">
						{km}
					</Badge>
					<Badge p="0" variant="opacity">
						{year}
					</Badge>
				</Box>

				<Heading size="7" variant="500" marginRight="3px">
					{formattedPrice}
				</Heading>
			</Box>
			{buttons && owner.id === localStorage.getItem("UUID@shopCar") && (
				<Flex justifyContent="space-between">
					<Button p="5px" variant="outline1" onClick={() => setEditIsOpen(true)}>
						Editar
					</Button>
					<Button onClick={() => navigate(`/cars/${id}`)} p="5px" variant="outline1">
						Ver detalhes
					</Button>
				</Flex>
			)}
			<EditCarModal carData={car} setEditIsOpen={setEditIsOpen} editIsOpen={editIsOpen}/>
		</Box>
	);
};

export default ProductCard;
