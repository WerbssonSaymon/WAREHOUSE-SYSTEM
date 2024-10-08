import { useState } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function usePostWarehouse() {
  const [descricao, setDescricao] = useState("");
  const [tipo, setTipo] = useState("");

  const apiWarehouse = import.meta.env.VITE_API_WAREHOUSE;
  const navigate = useNavigate()
  const axios = axiosInterceptor(navigate)

  const token = JSON.parse(localStorage.getItem("token"));
  const userData = JSON.parse(localStorage.getItem("userData"));

  async function cadastrarAlmoxarifado(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${apiWarehouse}/criar`,
        {
          empresaId: userData,
          descricao: descricao,
          tipo: parseInt(tipo),
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);
      setDescricao("");
      setTipo("");
    } catch (error) {
      console.error("Erro ao cadastrar warehouse:", error);
    }
  }
  return {
    descricao,
    tipo,
    setDescricao,
    setTipo,
    cadastrarAlmoxarifado,
  };
}
