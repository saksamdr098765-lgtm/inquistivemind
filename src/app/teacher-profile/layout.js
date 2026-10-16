import ProtectedRoute from "@/lib/ProtectedRoutes";
import AuthProvider from "../Components/AuthProvider";
import TeacherDrawerNav from "../Components/portal-ui/TeacherDrawerNav";

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute roles={["teacher"]}>
        <TeacherDrawerNav>{children}</TeacherDrawerNav>
      </ProtectedRoute>
    </AuthProvider>
  );
}
