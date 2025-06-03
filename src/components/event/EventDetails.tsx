import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import papiImg from "/public/assets/papi.png";

export const EventDetails: React.FC = () => {
  // Hardcoded event data
  const event = {
    title: "En Memoria de Felix Aranzadi Manterola",
    image_url: "/public/assets/papi.png",
    location:
      "Parroquia Santísimo SacramentoCalle Caney A-11 Urb. Caguas, Caguas, PR 00727",
    date: "2025-06-07T14:00:00Z",
    description:
      "Les invitamos cordialmente a la misa en memoria de Felix Aranzadi Manterola, para honrar su vida y compartir este momento de recogimiento junto a su familia.",
    additionalInfo: "",
  };

  const formattedDate = format(
    new Date(event.date),
    "EEEE, MMMM d, yyyy h:mm a"
  );

  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-lg shadow-md overflow-hidden"
      >
        {event.image_url && (
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <img
              src={papiImg}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            <h1 className="absolute bottom-6 left-6 right-6 text-white text-3xl sm:text-4xl md:text-5xl font-serif font-medium">
              {event.title}
            </h1>
          </div>
        )}

        <div className="p-6 md:p-8">
          {!event.image_url && (
            <h1 className="text-3xl sm:text-4xl font-serif font-medium text-gray-900 mb-6">
              {event.title}
            </h1>
          )}

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 mb-8">
            <div className="flex items-center gap-2 text-gray-700">
              <CalendarDays className="h-5 w-5 text-primary-600" />
              <span>{formattedDate}</span>
            </div>

            <div className="flex items-center gap-2 text-gray-700">
              <MapPin className="h-5 w-5 text-primary-600" />
              <a
                href={`https://maps.app.goo.gl/JPkYoBtJ6tiwhfwZ7`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span>{event.location}</span>
              </a>
            </div>
          </div>

          <div className="prose prose-slate max-w-none">
            <p className="text-gray-700 whitespace-pre-line">
              {event.description}
            </p>

            {event.additionalInfo && (
              <>
                <h2 className="text-xl font-serif font-medium text-gray-900 mt-8 mb-4">
                  Additional Information
                </h2>
                <p className="text-gray-700 whitespace-pre-line">
                  {event.additionalInfo}
                </p>
              </>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
