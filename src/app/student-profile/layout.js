import ProtectedRoute from "@/lib/ProtectedRoutes";
import AuthProvider from "../Components/AuthProvider";
import StudentDrawerNav from "../Components/portal-ui/StudentDrawerNav";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute roles={["student"]}>
        <StudentDrawerNav>{children}</StudentDrawerNav>
      </ProtectedRoute>
    </AuthProvider>
  );
}
