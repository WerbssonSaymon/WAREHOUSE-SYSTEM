import React, { useState, useEffect } from "react";
import useGetWarehouse from "../../../hooks/useGetWarehouse";
import { Button } from "@radix-ui/themes";
import usePostWarehouse from "../../../hooks/usePostWarehouse";
import usePutWarehouse from "../../../hooks/usePutWarehouse";
import useDeleteWarehouse from "../../../hooks/useDeleteWarehouse";
import SelectTypeInterprise from "../../components/selectTypeInterprise";

export default function BoxWarehouse() {
  // Hooks para buscar, criar, editar e deletar
  const { warehouses, setWarehouses } = useGetWarehouse();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentWarehouse, setCurrentWarehouse] = useState(null);
  const [selectedWarehouseId, setSelectedWarehouseId] = useState(null);

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const amount = 2; // Número de itens por página
  const totalPages = Math.ceil(warehouses.length / amount);
  const startIndex = (currentPage - 1) * amount;
  const currentWarehouses = warehouses.slice(startIndex, startIndex + amount);

  // Hooks para criação e edição
  const {
    descricao,
    tipo,
    setDescricao,
    setTipo,
    cadastrarAlmoxarifado,
  } = usePostWarehouse();

  const {
    updatedDescription,
    updateType,
    setUpdatedDescription,
    setUpdateType,
    handleEdit,
    handleUpdate,
  } = usePutWarehouse((updatedData) => {
    // Atualiza a lista local com a edição
    setWarehouses((prev) =>
      prev.map((warehouse) =>
        warehouse.id === updatedData.id ? updatedData : warehouse
      )
    );
  });

  const { deleteWarehouse } = useDeleteWarehouse((deletedId) => {
    setWarehouses((prev) => prev.filter((warehouse) => warehouse.id !== deletedId));
  });

  // Mapeamento de tipo
  const tipoMap = {
    1: "Estoque",
    2: "Produção",
    3: "Quarentena",
  };

  // Edição de almoxarifado
  const handleEditWarehouse = (warehouse) => {
    setCurrentWarehouse(warehouse);
    handleEdit(warehouse);
    setIsDialogOpen(true);
  };

  // Atualiza os campos de edição com o almoxarifado selecionado
  useEffect(() => {
    if (currentWarehouse) {
      setUpdatedDescription(currentWarehouse.descricao);
      setUpdateType(currentWarehouse.tipo);
    } else {
      clearForm();
    }
  }, [currentWarehouse]);

  // Limpa os campos do formulário
  const clearForm = () => {
    setDescricao("");
    setTipo("");
    setUpdatedDescription("");
    setUpdateType("");
    setCurrentWarehouse(null);
  };

  // Salva o almoxarifado (cadastrar ou atualizar)
  const handleSave = (event) => {
    if (currentWarehouse) {
      handleUpdate();
    } else {
      cadastrarAlmoxarifado(event);
    }
    clearForm();
    setIsDialogOpen(false);
  };

  // Clique no botão de excluir
  const handleDeleteClick = (id) => {
    setSelectedWarehouseId(id); // Salva o ID do almoxarifado a ser excluído
    setIsDeleteModalOpen(true); // Abre o modal de exclusão
  };

  // Confirma exclusão
  const confirmDelete = () => {
    if (selectedWarehouseId) {
      deleteWarehouse(selectedWarehouseId); // Exclui o almoxarifado com o ID selecionado
      setSelectedWarehouseId(null); // Reseta o ID após a exclusão
    }
    setIsDeleteModalOpen(false); // Fecha o modal
  };

  // Muda de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-[70vw] bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between">
        <h3>Almoxarifados</h3>
        <Button onClick={() => setIsDialogOpen(true)}>Adicionar</Button>
      </div>
      <hr />
      <div className="overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
                <tr key={warehouse.id} className="border-b">
                  <td className="py-2 px-4 font-medium text-gray-900">{warehouse.id}</td>
                  <td className="py-2 px-4">
                    <div className="w-64 text-left text-sm font-medium">{warehouse.descricao}</div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="text-sm font-medium">{tipoMap[warehouse.tipo] || "Desconhecido"}</div>
                  </td>
                  <td className="py-2 px-4">
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        onClick={() => handleEditWarehouse(warehouse)}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="ml-2 inline-flex justify-center w-full rounded-md border border-red-300 shadow-sm px-4 py-2 bg-red-600 text-sm font-medium text-white hover:bg-red-700"
                        onClick={() => handleDeleteClick(warehouse.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center">Nenhum almoxarifado encontrado.</td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="w-full flex justify-center mt-4 gap-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1 ? "!bg-orange-500 !text-white" : "!bg-gray-400"
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

      {/* Formulário para cadastrar/atualizar almoxarifado */}
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">Descrição:</label>
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
        <Button className="mr-2" onClick={clearForm}>
          Cancelar
        </Button>
        <Button onClick={handleSave}>
          {currentWarehouse ? "Atualizar" : "Cadastrar"}
        </Button>
      </div>

      {/* Modal de exclusão */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Excluir Item</h3>
            <p className="text-sm text-gray-500 mt-2">
              Tem certeza que deseja excluir este almoxarifado? Esta ação não pode ser desfeita.
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
      )}
    </div>
  );
}
