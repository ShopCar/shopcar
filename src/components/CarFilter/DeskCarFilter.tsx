import { Flex, Heading } from "@chakra-ui/react";

import BaseFilter from "./BaseFilter";

const DeskCarFilter = () => {
	const deskFlex = {
		base: "none",
		lg: "flex"
	};

	return (
		<Flex display={deskFlex} flexDirection="column" gap="1rem">
			<Heading as="h2" size="7" variant="600">
				Filtro
			</Heading>
			<BaseFilter />
		</Flex>
	);
};

export default DeskCarFilter;
