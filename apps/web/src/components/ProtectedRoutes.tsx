// components/ProtectedRoute.tsx
"use client";

import { useSession } from "core";
import { useRouter } from "next/navigation";
import { useEffect, useState, ReactNode } from "react";

type ProtectedRouteProps = {
  children: ReactNode;
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const [isAuth, setIsAuth] = useState<boolean | null>(null);
  const router = useRouter();

  useEffect(() => {
    const auth = localStorage.getItem("isAuth");
    setIsAuth(auth === "true");

    if (auth !== "true") {
      router.replace("/login");
    }
  }, [router]);

  if (isAuth === null) {
    return null;
  }

  return <>{children}</>;
}
