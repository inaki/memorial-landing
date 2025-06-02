import React from "react";
import { TributeWall } from "../components/tributes/TributeWall";

export const TributesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8 text-center font-greatvibes">
        En Tributo a Felix Aranzadi Manterola
      </h1>
      <div className="mb-12">
        <TributeWall />
      </div>
    </div>
  );
};
