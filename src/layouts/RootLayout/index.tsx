import { Outlet } from "react-router-dom";

import Providers from "../../contexts/Providers";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

const RootLayout = () => {
	return (
		<>
			<Providers>
				<NavBar />
				<Outlet />
				<Footer />
			</Providers>
		</>
	);
};

export default RootLayout;
