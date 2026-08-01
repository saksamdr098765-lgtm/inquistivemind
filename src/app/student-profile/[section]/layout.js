import AuthProvider from "@/app/Components/AuthProvider";



export default function Layout({ children }) {
  return (
    <AuthProvider>
      {children}
</AuthProvider>
  
  );
}