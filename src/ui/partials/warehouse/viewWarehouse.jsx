import React from "react";
import { Button } from "@radix-ui/themes";
import usePutWarehouse from "../../../hooks/usePutWarehouse";
import useDeleteWarehouse from "../../../hooks/useDeleteWarehouse";
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";

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
    <tbody>
      {warehouses.length > 0 ? (
        warehouses.map((warehouse) => (
          <tr key={warehouse.id}>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <div className="flex items-center">
                <a
                  href="#"
                  className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                >
                  {warehouse.id}
                </a>
              </div>
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              {editWarehouse?.id === warehouse.id ? (
                <input
                  type="text"
                  value={updatedDescription}
                  onChange={(e) => setUpdatedDescription(e.target.value)}
                />
              ) : (
                <span className="text-[13px] font-medium text-gray-400">
                  {warehouse.descricao}
                </span>
              )}
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              {editWarehouse?.id === warehouse.id ? (
                <input
                  type="text"
                  value={updateType}
                  onChange={(e) => setUpdateType(e.target.value)}
                />
              ) : (
                <span className="text-[13px] font-medium text-gray-400">
                  {warehouse.tipo}
                </span>
              )}
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              {editWarehouse?.id === warehouse.id ? (
                <Button
                  className="!bg-green-500 hover:!bg-green-600 !p-1 !text-white"
                  onClick={handleUpdate}
                >
                  Salvar
                </Button>
              ) : (
                <Button
                  className="!bg-amber-400 hover:!bg-amber-500 !p-1"
                  onClick={() => handleEdit(warehouse)}
                >
                  <FaPencilAlt />
                  Editar
                </Button>
              )}
            </td>
            <td className="py-2 px-4 border-b border-b-gray-50">
              <Button
                className="!bg-red-500 hover:!bg-red-600 !p-1 !text-white"
                onClick={() => deleteWarehouse(warehouse.id)}
              >
                <ImBin />
                Excluir
              </Button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan="3" className="py-2 px-4 text-center">
            Nenhum almoxarifado encontrado.
          </td>
        </tr>
      )}
    </tbody>
  );
}
