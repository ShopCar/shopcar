import { VStack } from "@chakra-ui/react";

import Banner from "../../components/Banner";
import NavLink from "../../components/NavLink";

const Home = () => {
	return (
		<VStack gap="4" h="150vh" pt="60px">
			<Banner />
			<NavLink type="router" path="/login" variant="outline">
				Custom Link
			</NavLink>
		</VStack>
	);
};

export default Home;
