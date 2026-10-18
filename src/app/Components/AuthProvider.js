"use client";

import { useEffect } from "react";
import axios from "axios";
import useAuthStore from "@/store/authStore";

let refreshPromise = null;

export default function AuthProvider({ children }) {
  const login = useAuthStore((state) => state.login);
  const logout = useAuthStore((state) => state.logout);
  const setInitialized = useAuthStore((state) => state.setInitialized);
  const isInitialized = useAuthStore((state) => state.isInitialized);

  useEffect(() => {
    if (isInitialized) return;

    if (!refreshPromise) {
      refreshPromise = axios
        .post(
          `${process.env.NEXT_PUBLIC_API}/auth/refresh-token`,
          {},
          { withCredentials: true }
        )
        .then((res) => {
          if (res.data?.user) {
            login({
              user: res.data.user,
              accessToken: res.data.accessToken,
            });
          } else {
            logout();
          }
          return res.data;
        })
        .catch(() => {
          logout();
        })
        .finally(() => {
          setInitialized();
          refreshPromise = null;
        });
    }
  }, [isInitialized, login, logout, setInitialized]);

  return children;
}