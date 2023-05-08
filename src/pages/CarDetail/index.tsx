import {
    Badge,
    Box,
    Flex,
    Heading,
    Image,
    Text,
    VStack,
    Button,
    Avatar,
    Textarea,
} from "@chakra-ui/react";
import CarPhotos from "../../components/CarPhotos";
import Comment from "../../components/Comment";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { icurrentCar } from "../../types/cars.type";
import api from "../../services/api";
import { iComment } from "../../types/comments";
import { useUserContext } from "../../contexts/userContext";

const CarDetail = () => {
    const { user, setUser } = useUserContext();
    const [currentCar, setCurrentCar] = useState<icurrentCar | null>(null);
    const [comments, setComments] = useState<iComment[] | null>(null);
    const [comment, setComment] = useState<string | null>(null);

    const { id } = useParams();
    useEffect(() => {
        const getInitialData = async () => {
            try {
                const userId = localStorage.getItem("UUID@shopCar");
                const token = localStorage.getItem("token@shopCar");
                const userData = await api(`/users/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(userData.data);

                const { data } = await api(`/cars/${id}`);
                setCurrentCar(data);

                const response = await api(`/comments/cars/${data.id}`);
                setComments(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        getInitialData();
    }, []);

    const postComment = async () => {
        try {
            const token = localStorage.getItem("token@shopCar");
            const { data } = await api.post(
                `/comments/cars/${currentCar?.id}`,
                { comment },
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            setComments([...comments!, data]);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <VStack
            h="100%"
            bgGradient="linear-gradient(brand.1, brand.1 65vh, grey.7 65vh)"
        >
            <Flex w="full" pt={"90px"} justifyContent="center" gap="50px">
                <Box
                    w="45%"
                    h="235px"
                    backgroundColor="grey.10"
                    borderRadius="3px"
                >
                    <Image
                        src={currentCar ? currentCar.images.cover : ""}
                        alt={currentCar ? currentCar.model : "Car"}
                        borderRadius="5px"
                        margin="0 auto"
                        maxH="100%"
                    />
                </Box>
                <CarPhotos
                    photos={String(currentCar?.images.gallery)
                        .replace(/[}"\{]/g, "")
                        .split(",")}
                />
            </Flex>
            <Flex minH="65vh" w="full" justifyContent="center" gap="50px">
                <VStack w="45%" h="35%">
                    <Flex
                        flexDirection="column"
                        justifyContent="space-around"
                        w="100%"
                        h="22.75vh"
                        backgroundColor="grey.10"
                        padding="20px"
                        borderRadius="3px"
                    >
                        <Heading
                            as="h3"
                            size="6"
                            h="20%"
                            w="100%"
                            textAlign="justify"
                        >
                            {currentCar?.model}
                        </Heading>
                        <Flex h="20%" w="100%" justifyContent="space-between">
                            <Flex>
                                <Badge variant="opacity" p="0 5px">
                                    {currentCar?.year}
                                </Badge>
                                <Badge variant="opacity" p="0 5px" ml="10px">
                                    {`${currentCar?.km} KM`}
                                </Badge>
                            </Flex>
                            <Text color="grey.1" variant="500">
                                {Number(currentCar?.price).toLocaleString(
                                    "pt-br",
                                    { style: "currency", currency: "BRL" }
                                )}
                            </Text>
                        </Flex>
                        <Button variant="brand1" size="small">
                            Comprar
                        </Button>
                    </Flex>
                    <Flex
                        flexDirection="column"
                        justifyContent="space-between"
                        w="100%"
                        h="22.75vh"
                        backgroundColor="grey.10"
                        padding="20px"
                        borderRadius="3px"
                    >
                        <Heading as="h3" size="6" w="100%" textAlign="justify">
                            Descrição
                        </Heading>
                        <Text size="7" textAlign="justify">
                            {currentCar?.description
                                ? currentCar.description
                                : "Anúncio sem descrição"}
                        </Text>
                    </Flex>
                    <VStack
                        w="100%"
                        minH="22.75vh"
                        backgroundColor="grey.10"
                        padding="20px"
                        borderRadius="3px"
                        alignItems="start"
                    >
                        <Heading as="h3" size="6" textAlign="start">
                            Comentários
                        </Heading>
                        {comments?.map((comment: any) => (
                            <Comment
                                userName={comment.user.name
                                    .split(" ")
                                    .filter(
                                        (name: string, index: number) =>
                                            index === 0 || index === 1
                                    )
                                    .join(" ")}
                                comment={comment.comment}
                                time="há 5 dias"
                                color="#E34D8C"
                            />
                        ))}
                    </VStack>
                    <Box
                        mt="35px"
                        w="100%"
                        h="42.25vh"
                        backgroundColor="grey.10"
                        borderRadius="3px"
                        padding="20px"
                    >
                        <Flex gap="8px" alignItems="center">
                            <Avatar
                                mr="10px"
                                name={user?.name}
                                size="sm"
                                backgroundColor="#153D2E"
                            ></Avatar>
                            <Heading mr="15px" as="h3" size="7" variant="500">
                                {user?.name
                                    .split(" ")
                                    .filter(
                                        (name, index) =>
                                            index === 0 || index === 1
                                    )
                                    .join(" ")}
                            </Heading>
                        </Flex>
                        <VStack w="full">
                            <Textarea
                                placeholder="Deixe aqui seu comentário..."
                                onChange={(e) => setComment(e.target.value)}
                                value={comment ? comment : ""}
                            />
                            <Button
                                onClick={() => {
                                    postComment();
                                    setComment("");
                                }}
                                variant="brand1"
                                p="8px"
                            >
                                Comentar
                            </Button>
                            <Badge
                                variant="negative"
                                color="#E9ECEF"
                                onClick={(e) => setComment(e.target.innerHTML)}
                            >
                                Gostei muito!
                            </Badge>
                            <Badge
                                variant="negative"
                                color="#E9ECEF"
                                onClick={(e) => setComment(e.target.innerHTML)}
                            >
                                Incrivel!
                            </Badge>
                            <Badge
                                variant="negative"
                                color="#E9ECEF"
                                onClick={(e) => setComment(e.target.innerHTML)}
                            >
                                Recomendarei para meus amigos!
                            </Badge>
                        </VStack>
                    </Box>
                </VStack>
                <Box
                    mt="35px"
                    w="25%"
                    h="42.25vh"
                    backgroundColor="grey.10"
                    borderRadius="3px"
                    padding="20px"
                >
                    <VStack gap="8px">
                        <Avatar
                            name="Samuel Leão"
                            size="lg"
                            backgroundColor="brand.1"
                        ></Avatar>
                        <Heading as="h3" size="6" variant="500">
                            Samuel Leão
                        </Heading>
                        <Text textAlign="center">
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's
                        </Text>
                        <Button padding="8px 15px" fontWeight="400">
                            Ver Todos Anúncios
                        </Button>
                    </VStack>
                </Box>
            </Flex>
        </VStack>
    );
};

export default CarDetail;
function async() {
    throw new Error("Function not implemented.");
}
