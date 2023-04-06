import { CarProvider } from "./carContext";
import { UserProvider } from "./userContext";

const Providers = ({ children }: any) => {
	return (
		<UserProvider>
			<CarProvider>{children}</CarProvider>
		</UserProvider>
	);
};

export default Providers;
