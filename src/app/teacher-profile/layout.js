import ProtectedRoute from "@/lib/ProtectedRoutes";
import AuthProvider from "../Components/AuthProvider";
import TeacherDrawerNav from "../Components/portal-ui/TeacherDrawerNav";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }) {
  return (
    <AuthProvider>
      <ProtectedRoute roles={["teacher"]}>
        <TeacherDrawerNav>{children}</TeacherDrawerNav>
      </ProtectedRoute>
    </AuthProvider>
  );
}
