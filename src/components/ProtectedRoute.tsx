import React from "react";
import { Navigate } from "react-router-dom";
import { useAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [authenticated] = useAtom(authAtom);
  return authenticated ? <>{children}</> : <Navigate to="/" />;
};
