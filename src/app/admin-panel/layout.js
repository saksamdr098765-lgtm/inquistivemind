import ProtectedRoute from "@/lib/ProtectedRoutes";
import AuthProvider from "../Components/AuthProvider";
import AdminDrawerNav from "../Components/portal-ui/AdminDrawerNav";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute roles={["admin"]}>
        <AdminDrawerNav>{children}</AdminDrawerNav>
      </ProtectedRoute>
    </AuthProvider>
  );
}