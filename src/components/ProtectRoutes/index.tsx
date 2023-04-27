import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../../contexts/userContext";

const ProtectRoutes = () => {

	// const { user } = useUserContext();
	const token = localStorage.getItem("token@shopCar")
	return (
		<>
			{token ? <Outlet /> : <Navigate to="/dashboard" replace />}
		</>
	)
	
};

export default ProtectRoutes;




