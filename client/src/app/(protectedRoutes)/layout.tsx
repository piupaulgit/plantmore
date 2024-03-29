"use client";

import { useUser } from "../_lib/Auth";
import { ReactNode } from "react";
import AuthGuard from "./_components/AuthGuard";

export default function Layout({ children }: { children: ReactNode }) {
  const user = useUser();

  if (user === false) return <>Auth loading...</>;
  if (!user) return <AuthGuard />;
  return children;
}
