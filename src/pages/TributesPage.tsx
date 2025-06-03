import React from "react";
import { TributeWall } from "../components/tributes/TributeWall";
import { Button } from "../components/ui/Button";

export const TributesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-0">
        <h1 className="text-3xl font-serif font-medium text-gray-900 text-center font-greatvibes">
          En Tributo a Felix Aranzadi Manterola
        </h1>
        <Button variant="ghost" className="self-center">
          Añadir Tributo
        </Button>
      </div>
      <div className="mb-12">
        <TributeWall />
      </div>
    </div>
  );
};
