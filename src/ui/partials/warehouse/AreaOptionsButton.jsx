import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import EditDialogWarehouse from "./editDialogWarehouse";
import AlertDelete from "../../components/alertDelete";

export default function AreaOptionsButton({
  warehouse,
  deleteWarehouse,
  handleEdit,
  handleUpdate,
  updatedDescription,
  updateType,
  setUpdatedDescription,
  setUpdateType,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const openEditDialog = () => {
    handleEdit(warehouse);
    setIsOpen(true);
  };

  const handleDialogOpenChange = (open) => {
    setIsOpen(open);
  };

  const confirmDelete = () => {
    deleteWarehouse(warehouse.id);
    setIsDeleteModalOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
      >
        <BsThreeDotsVertical />
      </button>

      {isDropdownOpen && (
        <div
          id="dropdown-menu"
          className="absolute right-10 bottom-1 z-50 mt-2 w-44 bg-white rounded divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600"
        >
          <ul className="py-1 text-sm" aria-labelledby="dropdown-button">
            <li>
              <button
                type="button"
                className="flex w-full items-center py-1 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 dark:hover:text-white text-gray-700 dark:text-gray-200"
                onClick={openEditDialog}
              >
                <FaEdit className="w-4 h-4 mr-2" />
                Editar
              </button>
            </li>

            <li>
              <button
                type="button"
                className="flex w-full items-center py-1 px-4 hover:bg-gray-300 dark:hover:bg-gray-600 text-red-500 dark:hover:text-red-400"
                onClick={() => setIsDeleteModalOpen(true)}
              >
                <FaTrash className="w-4 h-4 mr-2" />
                Excluir
              </button>
            </li>
          </ul>
        </div>
      )}

      {isDeleteModalOpen && (
        <AlertDelete
          warehouse={warehouse}
          confirmDelete={confirmDelete}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}

      <EditDialogWarehouse
        isOpen={isOpen}
        onOpenChange={handleDialogOpenChange}
        updatedDescription={updatedDescription}
        updateType={updateType}
        setUpdatedDescription={setUpdatedDescription}
        setUpdateType={setUpdateType}
        handleUpdate={handleUpdate}
        warehouse={warehouse}
        toggleDropdown={toggleDropdown}
      />
    </div>
  );
}
