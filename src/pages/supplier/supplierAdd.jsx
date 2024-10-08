import React from 'react'
import FormSupplier from '../../ui/partials/supplier/formSupplier'
import usePostSupplier from '../../hooks/usePostSupplier'

export default function supplierAdd() {

  const {nomeRazaoSocial,
    cpfCnpj,
    telefone,
    email,
    rgInscricaoEstadual,
    tipo,
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
    setEmpresaId,
    setNomeRazaoSocial,
    setCpfCnpj,
    setTelefone,
    setEmail,
    setRgInscricaoEstadual,
    setTipo,
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
    cadastrarFornecedor} = usePostSupplier()

    const supplierData = {
      nomeRazaoSocial,
      cpfCnpj,
      telefone,
      email,
      rgInscricaoEstadual,
      tipo,
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
      inscricaoMunicipal
    };

    const setSupplierData = {
      setNomeRazaoSocial,
      setCpfCnpj,
      setTelefone,
      setEmail,
      setRgInscricaoEstadual,
      setTipo,
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
      setInscricaoMunicipal
    };

  return (
    <div>
      cadastro de fornecedores
    <FormSupplier
      supplierData={supplierData}
      setSupplierData={setSupplierData}
      cadastrarFornecedor={cadastrarFornecedor}
    />
    </div>
  )
}
