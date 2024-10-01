import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInterceptor from "../data/services/axiosInterceptor";

export default function useLogin() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");
  const [token, setToken] = useState(null);
  
  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate)

  const empresaId = import.meta.env.VITE_EMPRESA_ID;
  const apiLogin = import.meta.env.VITE_API_LOGIN;

  const enviarRequisicao = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(apiLogin, {
        empresaId: empresaId,
        login: login,
        senha: senha,
      });
      
      const loginToken = response.data.data.token;
      setToken(loginToken);
      localStorage.setItem("token", JSON.stringify(loginToken));

      setLogin("");
      setSenha("");

      const myToken = JSON.parse(localStorage.getItem("token"));
      if (myToken) {
        navigate("/inicio");
      }
      console.log(myToken);
    } catch (error) {
      console.log(error);
      alert("Login Invalido")
      setLogin("");
      setSenha("");
    }
  };

  return {
    login,
    setLogin,
    senha,
    setSenha,
    token,
    enviarRequisicao,
  };
}
