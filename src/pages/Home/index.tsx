import { Badge, Heading, VStack } from "@chakra-ui/react";

import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";
import Avatar from "../../components/Avatar";

const Home = () => {
	return (
		<VStack gap="4" h="150vh" pt="60px">
			<Banner />
			<Heading>Home</Heading>
		</VStack>
	);
};

export default Home;
