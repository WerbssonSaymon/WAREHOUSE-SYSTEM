import { useState } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function usePutSupplier(onUpdateSupplier) {
  const [editSupplier, setEditSupplier] = useState(null);
  const [updatedNomeRazaoSocial, setUpdatedNomeRazaoSocial] = useState("");
  const [updatedCpfCnpj, setUpdatedCpfCnpj] = useState("");
  const [updatedTelefone, setUpdatedTelefone] = useState("");
  const [updatedEmail, setUpdatedEmail] = useState("");
  const [updatedRgInscricaoEstadual, setUpdatedRgInscricaoEstadual] =
    useState("");
  const [updatedTipo, setUpdatedTipo] = useState('');
  const [updatedAtivo, setUpdatedAtivo] = useState("")
  const [updatedOptanteSimples, setUpdatedOptanteSimples] = useState("");
  const [updatedLimiteCredito, setUpdatedLimiteCredito] = useState("");
  const [updatedNumeroPisPasepNit, setUpdatedNumeroPisPasepNit] = useState("");
  const [updatedCep, setUpdatedCep] = useState("");
  const [updatedCidade, setUpdatedCidade] = useState("");
  const [updatedUf, setUpdatedUf] = useState("");
  const [updatedLogradouro, setUpdatedLogradouro] = useState("");
  const [updatedNumero, setUpdatedNumero] = useState("");
  const [updatedBairro, setUpdatedBairro] = useState("");
  const [updatedComplemento, setUpdatedComplemento] = useState("");
  const [updatedCodigoIbge, setUpdatedCodigoIbge] = useState("");
  const [updatedNomeFantasia, setUpdatedNomeFantasia] = useState("");
  const [updatedAtividade, setUpdatedAtividade] = useState("");
  const [updatedCrt, setUpdatedCrt] = useState("");
  const [updatedLiberado, setUpdatedLiberado] = useState("");
  const [updatedDesconto, setUpdatedDesconto] = useState("");
  const [updatedFormaPagamentoId, setUpdatedFormaPagamentoId] = useState(null);
  const [updatedCondicaoPagamentoId, setUpdatedCondicaoPagamentoId] =
    useState(null);
  const [updatedInscricaoMunicipal, setUpdatedInscricaoMunicipal] = useState("");

  const apiSupplier = import.meta.env.VITE_API_SUPPLIER;
  const navigate = useNavigate();
  const axios = axiosInterceptor(navigate);

  const updateSupplier = async (updatedData) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.put(`${apiSupplier}/alterar`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Atualização bem-sucedida", response.data);
        if (onUpdateSupplier) {
          onUpdateSupplier(updatedData);
        }
      } else {
        console.error("Erro na atualização:", response);
      }
    } catch (error) {
      console.error("Erro ao atualizar fornecedores:", error);
    }
  };

  const handleEdit = (supplier) => {
    setEditSupplier(supplier);
    setUpdatedNomeRazaoSocial(supplier.nomeRazaoSocial);
    setUpdatedCpfCnpj(supplier.cpfCnpj);
    setUpdatedTelefone(supplier.telefone);
    setUpdatedEmail(supplier.email);
    setUpdatedRgInscricaoEstadual(supplier.rgInscricaoEstadual);
    setUpdatedTipo(supplier.tipo);
    setUpdatedAtivo(supplier.ativo);
    setUpdatedOptanteSimples(supplier.optanteSimples);
    setUpdatedLimiteCredito(supplier.limiteCredito);
    setUpdatedNumeroPisPasepNit(supplier.numeroPisPasepNit);
    setUpdatedCep(supplier.cep);
    setUpdatedCidade(supplier.cidade);
    setUpdatedUf(supplier.uf);
    setUpdatedLogradouro(supplier.logradouro);
    setUpdatedNumero(supplier.numero);
    setUpdatedBairro(supplier.bairro);
    setUpdatedComplemento(supplier.complemento);
    setUpdatedCodigoIbge(supplier.codigoIbge);
    setUpdatedNomeFantasia(supplier.nomeFantasia);
    setUpdatedAtividade(supplier.atividade);
    setUpdatedCrt(supplier.crt);
    setUpdatedLiberado(supplier.liberado);
    setUpdatedDesconto(supplier.desconto);
    setUpdatedFormaPagamentoId(supplier.formaPagamentoId);
    setUpdatedCondicaoPagamentoId(supplier.condicaoPagamentoId);
    setUpdatedInscricaoMunicipal(supplier.inscricaoMunicipal);
  };

  const handleUpdate = () => {
    const updatedData = {
      ...editSupplier,
      nomeRazaoSocial: updatedNomeRazaoSocial,
      cpfCnpj: updatedCpfCnpj,
      telefone: updatedTelefone,
      email: updatedEmail,
      rgInscricaoEstadual: updatedRgInscricaoEstadual,
      tipo: updatedTipo,
      ativo: updatedAtivo,
      optanteSimples: updatedOptanteSimples,
      limiteCredito: updatedLimiteCredito,
      numeroPisPasepNit: updatedNumeroPisPasepNit,
      cep: updatedCep,
      cidade: updatedCidade,
      uf: updatedUf,
      logradouro: updatedLogradouro,
      numero: updatedNumero,
      bairro: updatedBairro,
      complemento: updatedComplemento,
      codigoIbge: updatedCodigoIbge,
      nomeFantasia: updatedNomeFantasia,
      atividade: updatedAtividade,
      crt: updatedCrt,
      liberado: updatedLiberado,
      desconto: updatedDesconto,
      formaPagamentoId: updatedFormaPagamentoId,
      condicaoPagamentoId: updatedCondicaoPagamentoId,
      inscricaoMunicipal: updatedInscricaoMunicipal,
    };

    updateSupplier(updatedData);
    setEditSupplier(null);
  };

  return {
    updatedNomeRazaoSocial,
    updatedCpfCnpj,
    updatedTelefone,
    updatedEmail,
    updatedRgInscricaoEstadual,
    updatedTipo,
    updatedAtivo,
    updatedOptanteSimples,
    updatedLimiteCredito,
    updatedNumeroPisPasepNit,
    updatedCep,
    updatedCidade,
    updatedUf,
    updatedLogradouro,
    updatedNumero,
    updatedBairro,
    updatedComplemento,
    updatedCodigoIbge,
    updatedNomeFantasia,
    updatedAtividade,
    updatedCrt,
    updatedLiberado,
    updatedDesconto,
    updatedFormaPagamentoId,
    updatedCondicaoPagamentoId,
    updatedInscricaoMunicipal,
    setUpdatedNomeRazaoSocial,
    setUpdatedCpfCnpj,
    setUpdatedTelefone,
    setUpdatedEmail,
    setUpdatedRgInscricaoEstadual,
    setUpdatedTipo,
    setUpdatedAtivo,
    setUpdatedOptanteSimples,
    setUpdatedLimiteCredito,
    setUpdatedNumeroPisPasepNit,
    setUpdatedCep,
    setUpdatedCidade,
    setUpdatedUf,
    setUpdatedLogradouro,
    setUpdatedNumero,
    setUpdatedBairro,
    setUpdatedComplemento,
    setUpdatedCodigoIbge,
    setUpdatedNomeFantasia,
    setUpdatedAtividade,
    setUpdatedCrt,
    setUpdatedLiberado,
    setUpdatedDesconto,
    setUpdatedFormaPagamentoId,
    setUpdatedCondicaoPagamentoId,
    setUpdatedInscricaoMunicipal,
    handleEdit,
    handleUpdate,
  };
}
