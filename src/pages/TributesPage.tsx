import React, { useEffect } from "react";
import { TributeWall } from "../components/tributes/TributeWall";
import { Button } from "../components/ui/Button";
import { useAtom } from "jotai";
import { tributeDialogOpenAtom } from "../atoms/tributeAtom";
import { useNavigate } from "react-router-dom";

export const TributesPage: React.FC = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const isAuthed = localStorage.getItem("authenticated") === "true";
    if (!isAuthed) {
      navigate("/");
    }
  }, []);

  const [, setOpen] = useAtom(tributeDialogOpenAtom);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col gap-0">
        <h1 className="text-3xl font-serif font-medium text-gray-900 text-center font-greatvibes">
          En Tributo a Felix Aranzadi Manterola
        </h1>
        <Button
          variant="ghost"
          className="self-center"
          onClick={() => setOpen(true)}
        >
          Añadir Tributo
        </Button>
      </div>
      <div className="mb-12">
        <TributeWall />
      </div>
    </div>
  );
};
