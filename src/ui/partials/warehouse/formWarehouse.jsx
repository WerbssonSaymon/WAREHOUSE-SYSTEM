import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import usePostWarehouse from "../../../hooks/usePostWarehouse";
import SelectTypeInterprise from "../../components/selectTypeInterprise";
import { Box } from "@radix-ui/themes";

export default function formWarehouse({ isDialogOpen, setIsDialogOpen }) {
  const {
    empresaId,
    descricao,
    tipo,
    setEmpresaId,
    setDescricao,
    setTipo,
    cadastrarAlmoxarifado,
  } = usePostWarehouse();

  const clearForm = () => {
    setEmpresaId("");
    setDescricao("");
    setTipo("");
  };

  return (
    <Dialog.Root open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />
        <Dialog.Content
          className={`fixed h-full bg-white p-6 rounded shadow-md w-[400px] top-0 right-0 transform transition-transform duration-500 ease-in-out z-30 ${
            isDialogOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <Dialog.Title className="text-lg font-medium">
            Adicionar Almoxarifado
          </Dialog.Title>
          <Dialog.Description className="mt-2 text-sm text-gray-600">
            Preencha os dados e clique em "Salvar" ou aperte "Cancelar".
          </Dialog.Description>

          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">
              Id
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded"
                value={empresaId}
                onChange={(e) => setEmpresaId(e.target.value)}
              />
            </label>

            <label className="block text-sm font-medium text-gray-700">
              Descrição
              <input
                type="text"
                className="mt-1 block w-full p-2 border rounded"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
              />
            </label>

            <Box className="z-30 flex flex-col">
              Tipo de almoxarifado
              <SelectTypeInterprise tipo={tipo} setTipo={setTipo} />
            </Box>
          </div>

          <div className="mt-6 flex gap-1 justify-end">
            <button
              type="button"
              className="px-4 py-2 text-red-600 inline-flex items-center hover:text-white border border-red-600 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm text-center"
              onClick={() => {
                clearForm
                setIsDialogOpen(false)
              }}
            >
              Cancelar
            </button>
            <button
              type="button"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={cadastrarAlmoxarifado}
            >
              Salvar
            </button>
          </div>
          <Dialog.Close asChild>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={() => setIsDialogOpen(false)}
            >
              X
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
