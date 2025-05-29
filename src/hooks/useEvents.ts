import { useQuery } from "@tanstack/react-query";
import { supabase } from "../lib/supabase";
import type { Event } from "../types";

// Event queries
export const useEventQuery = () => {
  return useQuery({
    queryKey: ["event"],
    queryFn: async (): Promise<Event> => {
      const { data, error } = await supabase
        .from("events")
        .select("*")
        .single();

      if (error) throw error;
      return data;
    },
  });
};
