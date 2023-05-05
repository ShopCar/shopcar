import { useGlobalContext } from "../../../contexts/globalContext";

import MobileNav from "../MobileNav";
import DesktopNav from "../DesktopNav";

const DefaultNav = () => {
	const { windowSize } = useGlobalContext();

	return <>{windowSize.innerWidth < 768 ? <MobileNav /> : <DesktopNav />}</>;
};

export default DefaultNav;
