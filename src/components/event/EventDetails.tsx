import React from "react";
import { CalendarDays, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { format } from "date-fns";
import { useEventQuery } from "../../hooks/useEvents";

export const EventDetails: React.FC = () => {
  const { data: event, isLoading, error } = useEventQuery();

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error || !event) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>Error loading event details. Please try again later.</p>
      </div>
    );
  }

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
              src={event.image_url}
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
              <span>{event.location}</span>
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
