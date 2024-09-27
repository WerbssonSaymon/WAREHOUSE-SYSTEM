import { useState, useEffect } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function useGetWarehouse() {
  const [warehouses, setWarehouses] = useState([]);
  const apiWarehouse = import.meta.env.VITE_API_WAREHOUSE;

  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate); 

  useEffect(() => {
    fetchWarehouses();
  }, [apiWarehouse]);

  const fetchWarehouses = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(`${apiWarehouse}/listar`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWarehouses(response.data.data || []);
    } catch (error) {
      console.error("Erro ao buscar almoxarifados:", error);
    }
  };

  return { warehouses, setWarehouses };
}
