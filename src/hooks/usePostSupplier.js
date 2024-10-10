import { useState } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function usePostSupplier() {

  const [nomeRazaoSocial, setNomeRazaoSocial] = useState("");
  const [cpfCnpj, setCpfCnpj] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [rgInscricaoEstadual, setRgInscricaoEstadual] = useState("");
  const [tipo, setTipo] = useState(1); 
  const [ativo, setAtivo] = useState(true);
  const [optanteSimples, setOptanteSimples] = useState(true); 
  const [limiteCredito, setLimiteCredito] = useState(0);
  const [numeroPisPasepNit, setNumeroPisPasepNit] = useState("");
  const [cep, setCep] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState(11); 
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [complemento, setComplemento] = useState("");
  const [codigoIbge, setCodigoIbge] = useState(0);
  const [nomeFantasia, setNomeFantasia] = useState("");
  const [atividade, setAtividade] = useState(1); 
  const [crt, setCrt] = useState(1); 
  const [liberado, setLiberado] = useState(true); 
  const [desconto, setDesconto] = useState(0);
  const [formaPagamentoId, setFormaPagamentoId] = useState(null);
  const [condicaoPagamentoId, setCondicaoPagamentoId] = useState(null);
  const [inscricaoMunicipal, setInscricaoMunicipal] = useState("");

  const apiSupplier = import.meta.env.VITE_API_SUPPLIER;
  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate);

  const token = JSON.parse(localStorage.getItem("token"));
  const userData = JSON.parse(localStorage.getItem("userData"));

  async function cadastrarFornecedor(event) {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${apiSupplier}/criar`,
        {
          empresaId: userData,
          nomeRazaoSocial,
          cpfCnpj,
          telefone,
          email,
          rgInscricaoEstadual,
          tipo: parseInt(tipo),
          ativo,
          optanteSimples,
          limiteCredito,
          numeroPisPasepNit,
          cep,
          cidade,
          uf,
          logradouro,
          numero,
          bairro,
          complemento,
          codigoIbge,
          nomeFantasia,
          atividade: parseInt(atividade),
          crt: parseInt(crt),
          liberado,
          desconto,
          formaPagamentoId,
          condicaoPagamentoId,
          inscricaoMunicipal,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data);

      clearForm();
    } catch (error) {
      console.error("Erro ao cadastrar fornecedor:", error);
    }
  }

  function clearForm() {
    setNomeRazaoSocial("");
    setCpfCnpj("");
    setTelefone("");
    setEmail("");
    setRgInscricaoEstadual("");
    setTipo("");
    setAtivo("")
    setOptanteSimples("");
    setLimiteCredito("");
    setNumeroPisPasepNit("");
    setCep("");
    setCidade("");
    setUf("");
    setLogradouro("");
    setNumero("");
    setBairro("");
    setComplemento("");
    setCodigoIbge("");
    setNomeFantasia("");
    setAtividade("");
    setCrt("");
    setLiberado("");
    setDesconto("");
    setFormaPagamentoId(null);
    setCondicaoPagamentoId(null);
    setInscricaoMunicipal("");
  }

  return {
    nomeRazaoSocial,
    cpfCnpj,
    telefone,
    email,
    rgInscricaoEstadual,
    tipo,
    ativo,
    optanteSimples,
    limiteCredito,
    numeroPisPasepNit,
    cep,
    cidade,
    uf,
    logradouro,
    numero,
    bairro,
    complemento,
    codigoIbge,
    nomeFantasia,
    atividade,
    crt,
    liberado,
    desconto,
    formaPagamentoId,
    condicaoPagamentoId,
    inscricaoMunicipal,
    setNomeRazaoSocial,
    setCpfCnpj,
    setTelefone,
    setEmail,
    setRgInscricaoEstadual,
    setTipo,
    setAtivo,
    setOptanteSimples,
    setLimiteCredito,
    setNumeroPisPasepNit,
    setCep,
    setCidade,
    setUf,
    setLogradouro,
    setNumero,
    setBairro,
    setComplemento,
    setCodigoIbge,
    setNomeFantasia,
    setAtividade,
    setCrt,
    setLiberado,
    setDesconto,
    setFormaPagamentoId,
    setCondicaoPagamentoId,
    setInscricaoMunicipal,
    cadastrarFornecedor,
  };
}
