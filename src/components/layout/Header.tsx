import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";

interface HeaderProps {
  mobile?: boolean;
  onNavigate?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  mobile = false,
  onNavigate,
}) => {
  const location = useLocation();
  return (
    <header className="bg-white shadow-sm">
      <div
        className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8${
          mobile ? " w-full h-full flex flex-col" : ""
        }`}
      >
        <div
          className={`flex items-center py-4${
            mobile ? " flex-col items-start gap-8 py-8" : " justify-between"
          }`}
        >
          <Link
            to="/event"
            className="flex items-center gap-2"
            onClick={onNavigate}
          >
            <Heart className="h-6 w-6 text-primary-600" />
            <span className="text-xl font-serif font-medium">
              Kindred Farewell
            </span>
          </Link>

          <nav
            className={`flex ${
              mobile
                ? "flex-col gap-6 w-full mt-8"
                : "items-center gap-6 ml-auto"
            }`}
          >
            <Link
              to="/event"
              onClick={onNavigate}
              className={`font-medium ${mobile ? "text-2xl" : "text-sm"} ${
                location.pathname === "/event"
                  ? "text-primary-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Detalles del Evento
              {location.pathname === "/event" && !mobile && (
                <motion.div
                  layoutId="navIndicator"
                  className="h-0.5 bg-primary-600 mt-1"
                />
              )}
            </Link>

            <Link
              to="/tributes"
              onClick={onNavigate}
              className={`font-medium ${mobile ? "text-2xl" : "text-sm"} ${
                location.pathname === "/tributes"
                  ? "text-primary-700"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Muro de Recuerdos
              {location.pathname === "/tributes" && !mobile && (
                <motion.div
                  layoutId="navIndicator"
                  className="h-0.5 bg-primary-600 mt-1"
                />
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};
