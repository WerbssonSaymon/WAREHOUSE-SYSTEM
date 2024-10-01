import React, { useState } from "react";
import usePutWarehouse from "../../../hooks/usePutWarehouse";
import useDeleteWarehouse from "../../../hooks/useDeleteWarehouse";
import AreaOptionsButton from "./AreaOptionsButton";
import Pagination from "../../components/pagination";

export default function viewWarehouse({
  warehouses,
  onUpdateWarehouse,
  onDeleteWarehouse,
}) {
  const {
    updatedDescription,
    updateType,
    setUpdatedDescription,
    setUpdateType,
    handleEdit,
    handleUpdate,
  } = usePutWarehouse(onUpdateWarehouse);

  const { deleteWarehouse } = useDeleteWarehouse(onDeleteWarehouse);


  const [currentPage, setCurrentPage] = useState(1);
  const amount = 5; 
  const totalPages = Math.ceil(warehouses.length / amount);
  const startIndex = (currentPage - 1) * amount;
  const currentWarehouses = warehouses.slice(startIndex, startIndex + amount);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <table className="min-w-full table-auto">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-4 py-4 text-left">ID</th>
            <th scope="col" className="px-4 py-3 text-left">Descrição</th>
            <th scope="col" className="px-4 py-3 text-left">Tipo</th>
            <th scope="col" className="px-4 py-3 text-left">
              <span className="sr-only">Ações</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {currentWarehouses.length > 0 ? (
            currentWarehouses.map((warehouse) => (
              <tr key={warehouse.id} className="border-b dark:border-gray-700">
                <td className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {warehouse.id}
                </td>
                <td className="py-2 px-4">
                  <div className="w-64 text-left text-sm font-medium">
                    {warehouse.descricao}
                  </div>
                </td>
                <td className="py-2 px-4">
                  <div className="text-sm font-medium">{warehouse.tipo}</div>
                </td>
                <td className="py-2 px-4">
                  <AreaOptionsButton
                    warehouse={warehouse}
                    deleteWarehouse={deleteWarehouse}
                    handleEdit={handleEdit}
                    handleUpdate={() => handleUpdate(warehouse.id)}
                    updatedDescription={updatedDescription}
                    updateType={updateType}
                    setUpdatedDescription={setUpdatedDescription}
                    setUpdateType={setUpdateType}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="py-4 text-center">
                Nenhum almoxarifado encontrado.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </>
  );
}
