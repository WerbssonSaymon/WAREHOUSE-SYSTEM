import { useState, useEffect } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function useGetSupplier() {

  const [suppliers, setSuppliers] = useState([]);
  const apiSupplier = import.meta.env.VITE_API_SUPPLIER;

  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate); 

  useEffect(() => {
    fetchSuppliers();
  }, [apiSupplier, suppliers]);

  const fetchSuppliers = async () => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.get(`${apiSupplier}/listar/1`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setSuppliers(response.data.data || []);
    } catch (error) {
      console.error("Erro ao buscar fornecedores:", error);
    }
  };

  return { suppliers, setSuppliers };
}
