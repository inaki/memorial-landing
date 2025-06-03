import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { useSetAtom } from "jotai";
import { authAtom } from "../atoms/authAtom";

const HARDCODED_PASSWORD = "memorial2025";

export const LoginPage: React.FC = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const setAuth = useSetAtom(authAtom);

  useEffect(() => {
    if (localStorage.getItem("authenticated") === "true") {
      navigate("/tributes");
    }
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!password.trim()) {
      setError("Please enter the event password");
      return;
    }

    setIsLoading(true);

    try {
      if (password === HARDCODED_PASSWORD) {
        localStorage.setItem("authenticated", "true");
        setAuth(true);
        navigate("/event");
      } else {
        setError("Incorrect password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="flex justify-center">
          <Heart className="h-12 w-12 text-[var(#d4b063)]" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-serif font-medium text-gray-900">
          Memorial Event
        </h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          Please enter the event password to continue
        </p>
      </motion.div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              label="Event Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              error={error}
            />

            <div>
              <Button
                variant="primary"
                type="submit"
                className="w-full"
                isLoading={isLoading}
              >
                Enter Event
              </Button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};
