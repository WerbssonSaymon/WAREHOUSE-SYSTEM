import { useNavigate } from "react-router-dom";
import axiosInterceptor from "../data/services/axiosInterceptor";

export default function useDeleteWarehouse(onDeleteWarehouse) {
  const apiWarehouse = import.meta.env.VITE_API_WAREHOUSE;
  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate);

  const deleteWarehouse = async (id) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      await axios.delete(`${apiWarehouse}/excluir/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      onDeleteWarehouse(id);
    } catch (error) {
      console.error("Erro ao excluir almoxarifado:", error);
    }
  };

  return { deleteWarehouse };
}
