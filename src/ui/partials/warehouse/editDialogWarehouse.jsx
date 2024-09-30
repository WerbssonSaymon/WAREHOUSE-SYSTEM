import React from "react";
import * as Dialog from "@radix-ui/react-dialog";

export default function editDialogWarehouse({
  isOpen,
  onOpenChange,
  updatedDescription,
  updateType,
  setUpdatedDescription,
  setUpdateType,
  handleUpdate,
  warehouse,
}) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content
          className={`fixed h-full bg-white p-6 rounded shadow-md w-[400px] top-0 right-0 transform transition-transform duration-300 ease-in-out z-40 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Dialog.Title className="text-lg font-medium">
            Editar Warehouse
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            Altere os dados do almoxarifado abaixo e clique em "Salvar".
          </Dialog.Description>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Descrição
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded"
                value={updatedDescription}
                onChange={(e) => setUpdatedDescription(e.target.value)}
              />
            </label>

            <label className="block text-sm font-medium text-gray-700 mt-4">
              Tipo
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded"
                value={updateType}
                onChange={(e) => setUpdateType(e.target.value)}
              />
            </label>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => {
                handleUpdate();
                onOpenChange(false);
              }}
            >
              Salvar
            </button>
          </div>

          <Dialog.Close asChild>
            <button className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
