// src/routes.tsx
import { RouteObject } from "react-router-dom";
import { LoginPage } from "./pages/LoginPage";
import { Layout } from "./pages/Layout";
import { EventDetails } from "./components/event/EventDetails";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { TributesPage } from "./pages/TributesPage";
import Admin from "./pages/Admin";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/event",
    element: (
      <ProtectedRoute>
        <Layout>
          <EventDetails />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/tributes",
    element: (
      <ProtectedRoute>
        <Layout>
          <TributesPage />
        </Layout>
      </ProtectedRoute>
    ),
  },
  {
    path: "/dadimin",
    element: <Admin />,
  },
  {
    path: "*",
    element: <LoginPage />, // or a 404 page
  },
];
