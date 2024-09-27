import { useState } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function usePutWarehouse(onUpdateWarehouse) {
  const [editWarehouse, setEditWarehouse] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updateType, setUpdateType] = useState("");
  
  const apiWarehouse = import.meta.env.VITE_API_WAREHOUSE;
  const navigate = useNavigate()
  const axios = axiosInterceptor(navigate)
  

  // Função para atualizar um almoxarifado
  const updateWarehouse = async (updatedData) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.put(`${apiWarehouse}/alterar`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Atualização bem-sucedida", response.data);
        onUpdateWarehouse(updatedData); // Chama a função callback para atualizar a lista
      } else {
        console.error("Erro na atualização:", response);
      }
    } catch (error) {
      console.error("Erro ao atualizar almoxarifado:", error);
      navigate('/')
    }
  };

  // Função para iniciar o modo de edição
  const handleEdit = (warehouse) => {
    setEditWarehouse(warehouse);
    setUpdatedDescription(warehouse.descricao);
    setUpdateType(warehouse.tipo);
  };

  // Função para aplicar as atualizações
  const handleUpdate = () => {
    const updatedData = {
      ...editWarehouse, // Mantém os dados originais do almoxarifado
      descricao: updatedDescription,
      tipo: updateType,
    };

    updateWarehouse(updatedData);
    setEditWarehouse(null); // Reseta o modo de edição
  };

  // Retorna as funções e estados necessários para o componente
  return {
    editWarehouse,
    updatedDescription,
    updateType,
    setUpdatedDescription,
    setUpdateType,
    handleEdit,
    handleUpdate,
  };
}
