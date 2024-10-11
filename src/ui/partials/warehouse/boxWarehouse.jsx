import React, { useState, useEffect } from "react";
import useGetWarehouse from "../../../hooks/useGetWarehouse";
import { Button } from "@radix-ui/themes";
import usePostWarehouse from "../../../hooks/usePostWarehouse";
import usePutWarehouse from "../../../hooks/usePutWarehouse";
import useDeleteWarehouse from "../../../hooks/useDeleteWarehouse";
import ViewWarehouse from "./viewWarehouse";
import ModalWarehouse from "./modalWarehouse";
import Pagination from "../../components/pagination";
import HeadTableWarehouse from "./headTableWarehouse";
import AlertDelete from "../../components/alertDelete";

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
  const { descricao, tipo, setDescricao, setTipo, cadastrarAlmoxarifado } =
    usePostWarehouse();

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
    setWarehouses((prev) =>
      prev.filter((warehouse) => warehouse.id !== deletedId)
    );
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

  const [dropdownOpenId, setDropdownOpenId] = useState(null); 

  const toggleDropdown = (id) => {
    if (dropdownOpenId === id) {
      setDropdownOpenId(null); 
    } else {
      setDropdownOpenId(id);
    }
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
          <HeadTableWarehouse/>
          <ViewWarehouse
            currentWarehouses={currentWarehouses}
            tipoMap={tipoMap}
            toggleDropdown={toggleDropdown}
            dropdownOpenId={dropdownOpenId}
            handleEditWarehouse={handleEditWarehouse}
            handleDeleteClick={handleDeleteClick}
          />
        </table>
        <div className="w-full flex justify-center mt-4 gap-1">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>

      {isDialogOpen && (
        <ModalWarehouse
          currentWarehouse={currentWarehouse}
          updatedDescription={updatedDescription}
          updateType={updateType}
          descricao={descricao}
          tipo={tipo}
          setUpdatedDescription={setUpdatedDescription}
          setUpdateType={setUpdateType}
          setDescricao={setDescricao}
          setTipo={setTipo}
          setIsDialogOpen={setIsDialogOpen}
          clearForm={clearForm}
          handleSave={handleSave}
        />
      )}
      {/* Modal de exclusão */}
      {isDeleteModalOpen && (
        <AlertDelete
          confirmDelete={confirmDelete}
          setIsDeleteModalOpen={setIsDeleteModalOpen}
        />
      )}
    </div>
  );
}
