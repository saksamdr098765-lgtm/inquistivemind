import AuthProvider from "../Components/AuthProvider";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Layout({ children }) {
  return (
    <AuthProvider>
      {children}
    </AuthProvider>
  );
}
