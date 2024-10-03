import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInterceptor from "../data/services/axiosInterceptor";

export default function useLogin() {
  const [login, setLogin] = useState(""); 
  const [senha, setSenha] = useState(""); 
  const [token, setToken] = useState(null);

  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate); 

  const apiAutenticacao = import.meta.env.VITE_API_AUTENTICACAO;
  const apiLogin = import.meta.env.VITE_API_LOGIN; 

  const enviarRequisicao = async (event) => {
    event.preventDefault();

    try {
      
      const authResponse = await axios.post(apiAutenticacao, {
        login: login,
        senha: senha,
      });

     
      const empresaId = authResponse.data.data.id;

  
      const loginResponse = await axios.post(apiLogin, {
        empresaId: empresaId,
        login: login,
        senha: senha,
      });

     
      const loginToken = loginResponse.data.data.token;
      setToken(loginToken);
      localStorage.setItem("token", JSON.stringify(loginToken));

     
      setLogin("");
      setSenha("");

     
      const myToken = JSON.parse(localStorage.getItem("token"));
      if (myToken) {
        navigate("/inicio");
      }
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Login inválido");
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
