import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { TributeCard } from "./TributeCard";
import { useTributesQuery } from "../../hooks/useTributes";
import { TributeForm } from "./TributeForm";
import { Plus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "../../components/ui/dialog";

export const TributeWall: React.FC = () => {
  const { data: tributes, isLoading, error } = useTributesQuery();
  const [open, setOpen] = useState(false);

  const breakpointColumns = {
    default: 3,
    1100: 3,
    768: 2,
    500: 1,
  };

  if (isLoading) {
    return (
      <div className="flex justify-center py-12">
        <div className="animate-spin h-8 w-8 border-4 border-primary-500 rounded-full border-t-transparent"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12 text-red-500">
        <p>
          Error al cargar los tributos. Por favor, inténtalo de nuevo más tarde.
        </p>
      </div>
    );
  }

  if (!tributes || tributes.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p>Aún no hay tributos. Sé el primero en compartir un recuerdo.</p>
        {/* Floating Action Button for empty state */}
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              className="fixed bottom-8 right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-colors"
              aria-label="Agregar Tributo"
              onClick={() => setOpen(true)}
            >
              <Plus className="h-6 w-6" />
            </button>
          </DialogTrigger>
          <DialogContent className="max-w-md w-full">
            <DialogTitle>Comparte un Recuerdo</DialogTitle>
            <DialogDescription>
              Completa el formulario para agregar tu tributo.
            </DialogDescription>
            <TributeForm />
          </DialogContent>
        </Dialog>
      </div>
    );
  }

  return (
    <>
      {/* Floating Action Button */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className="fixed bottom-8 right-8 z-50 bg-primary-600 hover:bg-primary-700 text-white rounded-full p-4 shadow-lg transition-colors"
            aria-label="Agregar Tributo"
            onClick={() => setOpen(true)}
          >
            <Plus className="h-6 w-6" />
          </button>
        </DialogTrigger>
        <DialogContent className="max-w-md w-full">
          <DialogTitle>Comparte un Recuerdo</DialogTitle>
          <DialogDescription>
            Completa el formulario para agregar tu tributo.
          </DialogDescription>
          <TributeForm />
        </DialogContent>
      </Dialog>

      <Masonry
        breakpointCols={breakpointColumns}
        className="flex w-auto gap-4"
        columnClassName="bg-clip-padding"
      >
        {tributes.map((tribute, index) => (
          <div key={tribute.id} className="mb-4">
            <TributeCard tribute={tribute} index={index} />
          </div>
        ))}
      </Masonry>
    </>
  );
};
