import { Badge, Box, Heading, Image, Text, useColorModeValue } from "@chakra-ui/react"



const ProductCard = () =>{
    const property = {
        sellerImgUrl: "../../assets/seller_icon_mock.png",
        sellerName: "Samuel Leão",
        imageUrl: 'https://static.vecteezy.com/system/resources/previews/001/193/930/original/vintage-car-png.png',
        imageAlt: 'Imagem do carro',
        km: "0 KM",
        year: 2019,
        formattedPrice: 'R$12.200,00',
        carTitle: "Maserati - Ghibli",
        carDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem...",
    }

    return (
        <Box width='312px' height='350px' borderWidth='1px' overflow='hidden' display='flex' flexDir='column' gap='16px'>
            <Box display='flex' justifyContent='center' maxW='100%' height='152px' bgColor={useColorModeValue("grey.7", "grey.7")}>
                <Image maxW='262px' src={property.imageUrl} alt={property.imageAlt}/>
            </Box>
            <Heading size='7' variant='600'>
            {property.carTitle}
            </Heading>

            <Text size='2' variant='400'>
            {property.carDescription}
            </Text>

            <Box display='flex' gap='8px'>
                <Image src={property.sellerImgUrl}/>
                <Text size='2' variant='500'>{property.sellerName}</Text>
            </Box>

            <Box maxW='100%' display='flex' justifyContent='space-between'>
                <Box display='flex' gap='12px'>
                <Badge variant='opacity'>{property.km}</Badge>
                <Badge variant='opacity'>{property.year}</Badge>
                </Box>

                <Heading size='7' variant='500' marginRight='3px'>{property.formattedPrice}</Heading>
            </Box>

        </Box>
    )
}

export default ProductCard