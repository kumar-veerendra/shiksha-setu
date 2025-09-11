import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { userData } = useAuth();

  // User not logged in
  if (!userData || !userData.token) {
    return <Navigate to="/login" replace />;
  }

  // User role mismatch
  if (role && userData.role !== role) {
    const redirectTo =
      userData.role === "teacher" ? "/teacher-dashboard" : "/student-dashboard";
    return <Navigate to={redirectTo} replace />;
  }

  return children;
};

export default ProtectedRoute;
