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
        if (onUpdateWarehouse) {
          onUpdateWarehouse(updatedData);
        } 
      } else {
        console.error("Erro na atualização:", response);
      }
    } catch (error) {
      console.error("Erro ao atualizar almoxarifado:", error);
    }
  };

  const handleEdit = (warehouse) => {
    setEditWarehouse(warehouse);
    setUpdatedDescription(warehouse.descricao);
    setUpdateType(warehouse.tipo);
  };

  const handleUpdate = () => {
    const updatedData = {
      ...editWarehouse, 
      descricao: updatedDescription,
      tipo: updateType,
    };

    updateWarehouse(updatedData);
    setEditWarehouse(null); 
  };

  return {
    updatedDescription,
    updateType,
    setUpdatedDescription,
    setUpdateType,
    handleEdit,
    handleUpdate,
  };
}
