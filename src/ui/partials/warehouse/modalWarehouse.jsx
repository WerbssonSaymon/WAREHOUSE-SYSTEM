import React from "react";
import SelectTypeInterprise from "../../components/selectTypeInterprise";
import { Button } from "@radix-ui/themes";

export default function ModalWarehouse({
  currentWarehouse,
  updatedDescription,
  updateType,
  descricao,
  tipo,
  setUpdatedDescription,
  setUpdateType,
  setDescricao,
  setTipo,
  setIsDialogOpen,
  clearForm,
  handleSave,
}) {
  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black bg-opacity-50">
      <div className="w-full max-w-md h-full bg-white shadow-lg p-6 overflow-y-auto">
        <h2 className="text-lg font-semibold mb-4">
          {currentWarehouse ? "Editar Almoxarifado" : "Cadastrar Almoxarifado"}
        </h2>

        <div className="mt-4">
          <label className="block text-sm font-medium text-gray-700">
            Descrição:
          </label>
          <input
            type="text"
            value={currentWarehouse ? updatedDescription : descricao}
            onChange={(e) =>
              currentWarehouse
                ? setUpdatedDescription(e.target.value)
                : setDescricao(e.target.value)
            }
            className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
          />
        </div>

        <div className="mt-4">
          <SelectTypeInterprise
            value={currentWarehouse ? updateType : tipo}
            setValue={currentWarehouse ? setUpdateType : setTipo}
          />
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            className="mr-2"
            onClick={() => {
              clearForm();
              setIsDialogOpen(false);
            }}
          >
            Cancelar
          </Button>
          <Button onClick={handleSave}>
            {currentWarehouse ? "Atualizar" : "Cadastrar"}
          </Button>
        </div>
      </div>
    </div>
  );
}
