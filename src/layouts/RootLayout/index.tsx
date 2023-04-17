import { Outlet } from "react-router-dom";

import Providers from "../../contexts/Providers";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ScrollToTop from "../../components/ScrollToTop";

const RootLayout = () => {
	return (
		<>
			<Providers>
				<Header />
				<Outlet />
				<Footer />
				<ScrollToTop />
			</Providers>
		</>
	);
};

export default RootLayout;
