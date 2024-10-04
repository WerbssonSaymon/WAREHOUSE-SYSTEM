import React, { useState } from "react";
import ViewWarehouse from "./viewWarehouse";
import useGetWarehouse from "../../../hooks/useGetWarehouse";
import {
  updateWarehouse,
  deleteWarehouse,
} from "../../../data/services/warehouseService";
import FormWarehouse from "./formWarehouse";
import { Button } from "@radix-ui/themes";
import { FaCirclePlus } from "react-icons/fa6";

export default function boxWarehouse() {
  const { warehouses, setWarehouses } = useGetWarehouse();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentWarehouse, setCurrentWarehouse] = useState(null); // Novo estado para o almoxarifado atual

  const handleUpdateWarehouse = (id, updatedData) => {
    updateWarehouse(setWarehouses, id, updatedData);
  };

  const handleDeleteWarehouse = (id) => {
    deleteWarehouse(setWarehouses, id);
  };

  const handleEditWarehouse = (warehouse) => {
    setCurrentWarehouse(warehouse); // Define o almoxarifado atual para edição
    setIsDialogOpen(true); // Abre o diálogo
  };

  return (
    <div className="w-[70vw] bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between">
        <h3>Almoxarifados</h3>
        <Button onClick={() => setIsDialogOpen(true)}>
          <FaCirclePlus />
          Adicionar
        </Button>
        <Button onClick={() => handleEditWarehouse(/* Almoxarifado selecionado */)}>
          Editar
        </Button>
      </div>
      <hr />
      <div className="overflow-hidden">
        <table className="w-full min-w-[540px]">
          <ViewWarehouse
            warehouses={warehouses}
            onUpdateWarehouse={handleUpdateWarehouse}
            onDeleteWarehouse={handleDeleteWarehouse}
            onEditWarehouse={handleEditWarehouse} // Passa a função de edição
          />
        </table>
      </div>

      <FormWarehouse
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
        currentWarehouse={currentWarehouse} // Passa o almoxarifado atual
        setCurrentWarehouse={setCurrentWarehouse} // Passa a função para limpar o almoxarifado atual
      />
    </div>
  );
}
