import ProtectedRoute from "@/lib/ProtectedRoutes";
import AuthProvider from "../Components/AuthProvider";
import AdminDrawerNav from "../Components/portal-ui/AdminDrawerNav";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute roles={["admin"]}>
        <AdminDrawerNav>{children}</AdminDrawerNav>
      </ProtectedRoute>
    </AuthProvider>
  );
}
