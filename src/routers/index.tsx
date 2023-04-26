import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import { Heading } from "@chakra-ui/react";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Register from "../pages/Register";
import NotFound from "../pages/NotFound";
import CarDetail from "../pages/CarDetail";
import Dashboard from "../pages/Dashboard";

import CarLayout from "../layouts/CarLayout";
import RootLayout from "../layouts/RootLayout";

import ProtectRoutes from "../components/ProtectRoutes";

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

        <Route path="cars" element={<CarLayout />}>
          <Route path=":id" element={<CarDetail />}></Route>
        </Route>

        <Route path="profile/:id" element={<Profile />} />

        {/* <Route element={<ProtectRoutes />}> */}
        <Route path="dashboard" element={<Dashboard />} />
        {/* </Route> */}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default MainRoutes;
