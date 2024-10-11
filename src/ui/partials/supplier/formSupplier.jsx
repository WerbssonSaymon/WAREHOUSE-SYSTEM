import React from "react";
import { Button } from "@radix-ui/themes";

export default function formSupplier({
  currentSupplier,
  nomeRazaoSocial,
  setNomeRazaoSocial,
  updatedNomeRazaoSocial,
  setUpdatedNomeRazaoSocial,
  cpfCnpj,
  setCpfCnpj,
  updatedCpfCnpj,
  setUpdatedCpfCnpj,
  telefone,
  setTelefone,
  updatedTelefone,
  setUpdatedTelefone,
  email,
  setEmail,
  updatedEmail,
  setUpdatedEmail,
  rgInscricaoEstadual,
  setRgInscricaoEstadual,
  updatedRgInscricaoEstadual,
  setUpdatedRgInscricaoEstadual,
  tipo,
  setTipo,
  updatedTipo,
  setUpdatedTipo,
  ativo,
  setAtivo,
  updatedAtivo,
  setUpdatedAtivo,
  optanteSimples,
  setOptanteSimples,
  updatedOptanteSimples,
  setUpdatedOptanteSimples,
  limiteCredito,
  setLimiteCredito,
  updatedLimiteCredito,
  setUpdatedLimiteCredito,
  numeroPisPasepNit,
  setNumeroPisPasepNit,
  updatedNumeroPisPasepNit,
  setUpdatedNumeroPisPasepNit,
  cep,
  setCep,
  updatedCep,
  setUpdatedCep,
  cidade,
  setCidade,
  updatedCidade,
  setUpdatedCidade,
  uf,
  setUf,
  updatedUf,
  setUpdatedUf,
  logradouro,
  setLogradouro,
  updatedLogradouro,
  setUpdatedLogradouro,
  numero,
  setNumero,
  updatedNumero,
  setUpdatedNumero,
  bairro,
  setBairro,
  updatedBairro,
  setUpdatedBairro,
  complemento,
  setComplemento,
  updatedComplemento,
  setUpdatedComplemento,
  codigoIbge,
  setCodigoIbge,
  updatedCodigoIbge,
  setUpdatedCodigoIbge,
  nomeFantasia,
  setNomeFantasia,
  updatedNomeFantasia,
  setUpdatedNomeFantasia,
  atividade,
  setAtividade,
  updatedAtividade,
  setUpdatedAtividade,
  crt,
  setCrt,
  updatedCrt,
  setUpdatedCrt,
  liberado,
  setLiberado,
  updatedLiberado,
  setUpdatedLiberado,
  desconto,
  setDesconto,
  updatedDesconto,
  setUpdatedDesconto,
  formaPagamentoId,
  setFormaPagamentoId,
  updatedFormaPagamentoId,
  setUpdatedFormaPagamentoId,
  condicaoPagamentoId,
  setCondicaoPagamentoId,
  updatedCondicaoPagamentoId,
  setUpdatedCondicaoPagamentoId,
  inscricaoMunicipal,
  setInscricaoMunicipal,
  updatedInscricaoMunicipal,
  setUpdatedInscricaoMunicipal,
  clearForm,
  handleSave,
  setIsDialogOpen
}) {
  
  return (
    <div className="mt-4">
      <FormField label="Razão Social" value={currentSupplier ? updatedNomeRazaoSocial : nomeRazaoSocial} onChange={(e) => currentSupplier ? setUpdatedNomeRazaoSocial(e.target.value) : setNomeRazaoSocial(e.target.value)} />
      <FormField label="CPF/CNPJ" value={currentSupplier ? updatedCpfCnpj : cpfCnpj} onChange={(e) => currentSupplier ? setUpdatedCpfCnpj(e.target.value) : setCpfCnpj(e.target.value)} />
      <FormField label="Telefone" value={currentSupplier ? updatedTelefone : telefone} onChange={(e) => currentSupplier ? setUpdatedTelefone(e.target.value) : setTelefone(e.target.value)} />
      <FormField label="E-mail" value={currentSupplier ? updatedEmail : email} onChange={(e) => currentSupplier ? setUpdatedEmail(e.target.value) : setEmail(e.target.value)} />
      <FormField label="RG/Inscrição Estadual" value={currentSupplier ? updatedRgInscricaoEstadual : rgInscricaoEstadual} onChange={(e) => currentSupplier ? setUpdatedRgInscricaoEstadual(e.target.value) : setRgInscricaoEstadual(e.target.value)} />
      <FormField label="Tipo" value={currentSupplier ? updatedTipo : tipo} onChange={(e) => currentSupplier ? setUpdatedTipo(e.target.value) : setTipo(e.target.value)} />
      <FormField label="Ativo" value={currentSupplier ? updatedAtivo : ativo} onChange={(e) => currentSupplier ? setUpdatedAtivo(e.target.value) : setAtivo(e.target.value)} />
      <FormField label="Optante pelo Simples" type="checkbox" checked={currentSupplier ? updatedOptanteSimples : optanteSimples} onChange={(e) => currentSupplier ? setUpdatedOptanteSimples(e.target.checked) : setOptanteSimples(e.target.checked)} />
      <FormField label="Limite de Crédito" type="number" value={currentSupplier ? updatedLimiteCredito : limiteCredito} onChange={(e) => currentSupplier ? setUpdatedLimiteCredito(e.target.value) : setLimiteCredito(e.target.value)} />
      <FormField label="Número PIS/PASEP/NIT" value={currentSupplier ? updatedNumeroPisPasepNit : numeroPisPasepNit} onChange={(e) => currentSupplier ? setUpdatedNumeroPisPasepNit(e.target.value) : setNumeroPisPasepNit(e.target.value)} />
      <FormField label="CEP" value={currentSupplier ? updatedCep : cep} onChange={(e) => currentSupplier ? setUpdatedCep(e.target.value) : setCep(e.target.value)} />
      <FormField label="Cidade" value={currentSupplier ? updatedCidade : cidade} onChange={(e) => currentSupplier ? setUpdatedCidade(e.target.value) : setCidade(e.target.value)} />
      <FormField label="UF" value={currentSupplier ? updatedUf : uf} onChange={(e) => currentSupplier ? setUpdatedUf(e.target.value) : setUf(e.target.value)} />
      <FormField label="Logradouro" value={currentSupplier ? updatedLogradouro : logradouro} onChange={(e) => currentSupplier ? setUpdatedLogradouro(e.target.value) : setLogradouro(e.target.value)} />
      <FormField label="Número" type="number" value={currentSupplier ? updatedNumero : numero} onChange={(e) => currentSupplier ? setUpdatedNumero(e.target.value) : setNumero(e.target.value)} />
      <FormField label="Bairro" value={currentSupplier ? updatedBairro : bairro} onChange={(e) => currentSupplier ? setUpdatedBairro(e.target.value) : setBairro(e.target.value)} />
      <FormField label="Complemento" value={currentSupplier ? updatedComplemento : complemento} onChange={(e) => currentSupplier ? setUpdatedComplemento(e.target.value) : setComplemento(e.target.value)} />
      <FormField label="Código IBGE" value={currentSupplier ? updatedCodigoIbge : codigoIbge} onChange={(e) => currentSupplier ? setUpdatedCodigoIbge(e.target.value) : setCodigoIbge(e.target.value)} />
      <FormField label="Nome Fantasia" value={currentSupplier ? updatedNomeFantasia : nomeFantasia} onChange={(e) => currentSupplier ? setUpdatedNomeFantasia(e.target.value) : setNomeFantasia(e.target.value)} />
      <FormField label="Atividade" value={currentSupplier ? updatedAtividade : atividade} onChange={(e) => currentSupplier ? setUpdatedAtividade(e.target.value) : setAtividade(e.target.value)} />
      <FormField label="CRT" value={currentSupplier ? updatedCrt : crt} onChange={(e) => currentSupplier ? setUpdatedCrt(e.target.value) : setCrt(e.target.value)} />
      <FormField label="Liberado" value={currentSupplier ? updatedLiberado : liberado} onChange={(e) => currentSupplier ? setUpdatedLiberado(e.target.value) : setLiberado(e.target.value)} />
      <FormField label="Desconto" type="number" value={currentSupplier ? updatedDesconto : desconto} onChange={(e) => currentSupplier ? setUpdatedDesconto(e.target.value) : setDesconto(e.target.value)} />
      <FormField label="Forma de Pagamento" value={currentSupplier ? updatedFormaPagamentoId : formaPagamentoId} onChange={(e) => currentSupplier ? setUpdatedFormaPagamentoId(e.target.value) : setFormaPagamentoId(e.target.value)} />
      <FormField label="Condição de Pagamento" value={currentSupplier ? updatedCondicaoPagamentoId : condicaoPagamentoId} onChange={(e) => currentSupplier ? setUpdatedCondicaoPagamentoId(e.target.value) : setCondicaoPagamentoId(e.target.value)} />
      <FormField label="Inscrição Municipal" value={currentSupplier ? updatedInscricaoMunicipal : inscricaoMunicipal} onChange={(e) => currentSupplier ? setUpdatedInscricaoMunicipal(e.target.value) : setInscricaoMunicipal(e.target.value)} />  
      <div className="mt-6 flex justify-end">
        <Button className="mr-2" onClick={() => {clearForm(), setIsDialogOpen(false)}}>Cancelar</Button>
        <Button onClick={handleSave}>{currentSupplier ? "Atualizar" : "Cadastrar"}</Button>
      </div>
    </div>
  );
}

const FormField = ({ label, type = "text", value, onChange, checked }) => (
  <div className="mt-4">
    <label className="block text-sm font-medium text-gray-700">{label}:</label>
    <input
      type={type}
      value={type === "checkbox" ? undefined : value}
      checked={type === "checkbox" ? checked : undefined}
      onChange={onChange}
      className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
    />
  </div>
)