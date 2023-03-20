import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element }) => {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn);
  if (isLoggedIn) {
    return element;
  } else {
    return <Navigate to="/" replace />;
  }
};
export default ProtectedRoute;
