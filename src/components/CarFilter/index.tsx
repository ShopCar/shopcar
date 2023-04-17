import { useGlobalContext } from "../../contexts/globalContext";

import MobCarFilter from "./MobCarFilter";
import DeskCarFilter from "./DeskCarFilter";

const CarFilter = () => {
	const { windowSize } = useGlobalContext();

	return (
		<>{windowSize.innerWidth < 992 ? <MobCarFilter /> : <DeskCarFilter />}</>
	);
};

export default CarFilter;
