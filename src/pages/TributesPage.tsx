import React from "react";
import { TributeWall } from "../components/tributes/TributeWall";
import { TributeForm } from "../components/tributes/TributeForm";

export const TributesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="text-3xl font-serif font-medium text-gray-900 mb-8 text-center">
        Tribute Wall
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
        <div className="lg:col-span-1 order-2 lg:order-1">
          <div className="sticky top-8">
            <TributeForm />
          </div>
        </div>

        <div className="lg:col-span-3 order-1 lg:order-2">
          <TributeWall />
        </div>
      </div>
    </div>
  );
};
