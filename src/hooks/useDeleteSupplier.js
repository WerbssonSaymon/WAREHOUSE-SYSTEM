import { useNavigate } from "react-router-dom";
import axiosInterceptor from "../data/services/axiosInterceptor";

export default function useDeleteSupplier(onDeleteSupplier) {
  const apiSupplier = import.meta.env.VITE_API_SUPPLIER;
  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate);

  const deleteSupplier = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.delete(`${apiSupplier}/excluir/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDeleteSupplier(id);
    } catch (error) {
      console.error("Erro ao excluir fornecedor:", error);
    }
  };

  return { deleteSupplier };
}