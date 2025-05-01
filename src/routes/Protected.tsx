import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../features/auth/auth.store";

export default function ProtectedRoute() {
  
  const username = useAuthStore((state) => state.username);
  if (!username) {
    return <Navigate to="/login" replace />;
  }
return <Outlet />;
}
