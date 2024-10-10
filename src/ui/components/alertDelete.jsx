import React from "react";

export default function alertDelete({ confirmDelete, setIsDeleteModalOpen }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h3 className="text-lg font-medium text-gray-900">Excluir Item</h3>
        <p className="text-sm text-gray-500 mt-2">
          Tem certeza que deseja excluir este almoxarifado? Esta ação não pode
          ser desfeita.
        </p>
        <div className="mt-4 flex justify-end">
          <button
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={confirmDelete}
          >
            Confirmar
          </button>
          <button
            className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={() => setIsDeleteModalOpen(false)}
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
}
