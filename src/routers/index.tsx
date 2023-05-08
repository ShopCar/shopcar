import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements
} from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import CarDetail from "../pages/CarDetail";
import RootLayout from "../layouts/RootLayout";
import SendResetPasswordEmail from "../pages/ResetPassword/SendResetPasswordEmail";
import UserResetPassword from "../pages/ResetPassword/UserResetPassword";

const MainRoutes = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route
				path="/"
				element={<RootLayout />}
				errorElement={<Heading>"Oops, Algo deu errado!🤷"</Heading>}
			>
				<Route index element={<Home />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />

				<Route path="">
					<Route path="reset_password/" element={<SendResetPasswordEmail />} />
					<Route path="reset_password/:token" element={<UserResetPassword />} />
				</Route>

				<Route path="cars">
					<Route path=":id" element={<CarDetail />} />
				</Route>

				<Route path="profile/:id" element={<Profile />} />

				<Route path="*" element={<NotFound />} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
};

export default MainRoutes;
