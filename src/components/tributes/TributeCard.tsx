import React from "react";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import type { Tribute } from "../../types";

interface TributeCardProps {
  tribute: Tribute;
  index: number;
}

export const TributeCard: React.FC<TributeCardProps> = ({ tribute, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="break-inside-avoid bg-white rounded-lg shadow-md overflow-hidden"
    >
      {tribute.image_url && (
        <div className="relative w-full overflow-hidden">
          <img
            src={tribute.image_url}
            alt={`Tribute from ${tribute.author}`}
            className="w-full h-auto object-cover transition-transform hover:scale-105 duration-500"
          />
        </div>
      )}

      <div className="p-4">
        <p className="text-gray-700 whitespace-pre-line">{tribute.message}</p>

        <div className="mt-4 pt-3 border-t border-gray-100 flex justify-between items-center">
          <p className="font-medium text-primary-700">— {tribute.author}</p>
          <p className="text-xs text-gray-400">
            {formatDistanceToNow(new Date(tribute.created_at), {
              addSuffix: true,
            })}
          </p>
        </div>
      </div>
    </motion.div>
  );
};
