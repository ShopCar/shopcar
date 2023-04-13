import { Outlet } from "react-router-dom";

import Providers from "../../contexts/Providers";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

const RootLayout = () => {
	return (
		<>
			<Providers>
				<Header />
				<Outlet />
				<Footer />
			</Providers>
		</>
	);
};

export default RootLayout;
