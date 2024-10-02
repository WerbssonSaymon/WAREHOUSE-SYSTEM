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

  const handleUpdateWarehouse = (id, updatedData) => {
    updateWarehouse(setWarehouses, id, updatedData);
  };

  const handleDeleteWarehouse = (id) => {
    deleteWarehouse(setWarehouses, id);
  };

  return (
    <div className="w-[70vw] bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between">
        <h3>Almoxarifados</h3>
        <Button onClick={() => setIsDialogOpen(true)}>
          <FaCirclePlus />
          Adicionar
        </Button>
      </div>
      <hr />
      <div className="overflow-hidden">
        <table className="w-full min-w-[540px]">
          <ViewWarehouse
            warehouses={warehouses}
            onUpdateWarehouse={handleUpdateWarehouse}
            onDeleteWarehouse={handleDeleteWarehouse}
          />
        </table>
      </div>

      <FormWarehouse
        isDialogOpen={isDialogOpen}
        setIsDialogOpen={setIsDialogOpen}
      />
    </div>
  );
}
