import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function viewSupplier({
  currentSuppliers,
  handleEditSupplier,
  handleDeleteClick,
  dropdownOpenId,
  toggleDropdown
}) {
  return (
    <tbody>
      {currentSuppliers.length > 0 ? (
        currentSuppliers.map((supplier) => (
          <tr key={supplier.id} className="border-b">
            <td className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              {supplier.id}
            </td>
            <td className="py-2 px-4">
              <div className=" text-left text-sm font-medium">
                {supplier.empresaId}
              </div>
            </td>
            <td className="py-2 px-4">
              <div className=" text-left text-sm font-medium">
                {supplier.nomeRazaoSocial}
              </div>
            </td>
            <td className="py-2 px-4">
              <div className=" text-left text-sm font-medium">
                {supplier.cpfCnpj}
              </div>
            </td>
            <td className="py-2 px-4">
              <div className=" text-left text-sm font-medium">
                {supplier.numeroTelefone}
              </div>
            </td>
            <td className="py-2 px-4">
              <div className=" text-left text-sm font-medium">
                {supplier.email}
              </div>
            </td>
            <td className="py-2 px-4">
              <div className=" text-left text-sm font-medium">
                {supplier.ativo}
              </div>
            </td>
            <td>
              <button
                type="button"
                onClick={() => toggleDropdown(supplier.id)}
                className="inline-flex justify-center w-5 rounded-md border shadow-sm px-4 py-2 text-sm font-medium"
              >
                ...
              </button>
            </td>
            {dropdownOpenId === supplier.id && (
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
                        onClick={() => handleEditSupplier(supplier)}
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
                        onClick={() => handleDeleteClick(supplier.id)}
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
