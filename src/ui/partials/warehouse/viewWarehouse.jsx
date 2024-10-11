import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function viewWarehouse({
    currentWarehouses,
    tipoMap,
    toggleDropdown,
    dropdownOpenId,
    handleEditWarehouse,
    handleDeleteClick
}) {
  return (
    <tbody>
      {currentWarehouses.length > 0 ? (
        currentWarehouses.map((warehouse) => (
          <tr key={warehouse.id} className="border-b">
            <td className="py-2 px-4 font-medium text-gray-900">
              {warehouse.id}
            </td>
            <td className="py-2 px-4">
              <div className="w-64 text-left text-sm font-medium">
                {warehouse.descricao}
              </div>
            </td>
            <td className="py-2 px-4">
              <div className="text-sm font-medium">
                {tipoMap[warehouse.tipo] || "Desconhecido"}
              </div>
            </td>
            <td>
              <button
                type="button"
                onClick={() => toggleDropdown(warehouse.id)}
                className="inline-flex justify-center w-5 rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                <BsThreeDotsVertical/>
              </button>
            </td>
            {dropdownOpenId === warehouse.id && (
              <td className="py-2 px-4 relative">
                <div
                  id="dropdown-menu"
                  className="absolute right-0 mt-2 w-44 bg-white rounded divide-y divide-gray-100 shadow-lg"
                >
                  <ul
                    className="py-1 text-sm"
                    aria-labelledby="dropdown-button"
                  >
                    <li>
                      <button
                        type="button"
                        onClick={() => handleEditWarehouse(warehouse)}
                        className="flex w-full items-center py-1 px-4 hover:bg-gray-300 text-gray-700"
                      >
                        <FaEdit className="w-4 h-4 mr-2" />
                        Editar
                      </button>
                    </li>
                    <li>
                      <button
                        type="button"
                        className="flex w-full items-center py-1 px-4 hover:bg-gray-300 text-red-500"
                        onClick={() => handleDeleteClick(warehouse.id)}
                      >
                        <FaTrash className="w-4 h-4 mr-2" />
                        Excluir
                      </button>
                    </li>
                  </ul>
                </div>
              </td>
            )}
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
  );
}
