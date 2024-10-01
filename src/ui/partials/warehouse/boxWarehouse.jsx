import React from "react";
import HeaderTableWarehouse from "./headerTableWarehouse";
import ViewWarehouse from "./viewWarehouse";
import useGetWarehouse from "../../../hooks/useGetWarehouse";
import { updateWarehouse, deleteWarehouse } from "../../../data/services/warehouseService";

export default function boxWarehouse() {
 
  const { warehouses, setWarehouses } = useGetWarehouse();

  const handleUpdateWarehouse = (id, updatedData) => {
    updateWarehouse( setWarehouses, id, updatedData); 
  };

  const handleDeleteWarehouse = (id) => {
    deleteWarehouse( setWarehouses, id); 
  };
   

  return (
    <div className="w-[70vw] bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <HeaderTableWarehouse />
      <hr></hr>
      <div className="overflow-hidden">

        <table className="w-full min-w-[540px]">
          <ViewWarehouse
            warehouses={warehouses}
            onUpdateWarehouse={handleUpdateWarehouse}
            onDeleteWarehouse={handleDeleteWarehouse}
          />
        </table>
      </div>
    </div>
  );
}
