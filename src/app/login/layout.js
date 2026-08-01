import AuthProvider from "../Components/AuthProvider";


export default function Layout({ children }) {
  return (
    <AuthProvider>
      {children}
</AuthProvider>
  );
}