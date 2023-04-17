import { CarProvider } from "./carContext";
import { UserProvider } from "./userContext";
import { GlobalProvider } from "./globalContext";

import { mandatoryChildren } from "../types/childrenProps";

const Providers = ({ children }: mandatoryChildren) => {
	return (
		<GlobalProvider>
			<UserProvider>
				<CarProvider>{children}</CarProvider>
			</UserProvider>
		</GlobalProvider>
	);
};

export default Providers;
