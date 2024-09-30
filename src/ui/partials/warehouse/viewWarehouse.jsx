import React from "react";
import usePutWarehouse from "../../../hooks/usePutWarehouse";
import useDeleteWarehouse from "../../../hooks/useDeleteWarehouse";
import AreaOptionsButton from "./AreaOptionsButton";

export default function ViewWarehouse({
  warehouses,
  onUpdateWarehouse,
  onDeleteWarehouse,
}) {
  const {
    editWarehouse,
    updatedDescription,
    updateType,
    setUpdatedDescription,
    setUpdateType,
    handleEdit,
    handleUpdate,
  } = usePutWarehouse(onUpdateWarehouse);

  const { deleteWarehouse } = useDeleteWarehouse(onDeleteWarehouse);

  return (
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
        {warehouses.length > 0 ? (
          warehouses.map((warehouse) => (
            <tr key={warehouse.id} className="border-b dark:border-gray-700">
              <td className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {warehouse.id}
              </td>
              <td className="py-2 px-4">
                {editWarehouse?.id === warehouse.id ? (
                  <input
                    type="text"
                    value={updatedDescription}
                    onChange={(e) => setUpdatedDescription(e.target.value)}
                    className="w-full px-2 py-1 text-sm"
                  />
                ) : (
                  <div className="w-64 text-left text-sm font-medium">
                    {warehouse.descricao}
                  </div>
                )}
              </td>
              <td className="py-2 px-4">
                {editWarehouse?.id === warehouse.id ? (
                  <input
                    type="text"
                    value={updateType}
                    onChange={(e) => setUpdateType(e.target.value)}
                    className="w-full px-2 py-1 text-sm"
                  />
                ) : (
                  <div className="text-sm font-medium">{warehouse.tipo}</div>
                )}
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
  );
}
