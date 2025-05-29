import React, { useState } from "react";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Menu } from "lucide-react";

export const Layout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [headerOpen, setHeaderOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 relative">
      <button
        className="fixed top-4 right-4 z-50 p-2 bg-white rounded shadow-md md:hidden"
        onClick={() => setHeaderOpen((open) => !open)}
        aria-label="Open navigation"
      >
        <Menu className="h-6 w-6" />
      </button>

      <div
        className={`fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          headerOpen ? "translate-x-0" : "translate-x-full"
        } md:relative md:translate-x-0 md:w-auto md:h-auto md:shadow-none`}
      >
        <Header mobile={headerOpen} onNavigate={() => setHeaderOpen(false)} />
      </div>

      {headerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-30 md:hidden"
          onClick={() => setHeaderOpen(false)}
        />
      )}

      <main className="flex-grow py-8 px-4 sm:px-6 lg:px-8">{children}</main>
      <Footer />
    </div>
  );
};
