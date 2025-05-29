import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "../lib/supabase";

export const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return isAuthenticated() ? <>{children}</> : <Navigate to="/" />;
};
