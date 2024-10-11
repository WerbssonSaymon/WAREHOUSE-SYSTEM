import React, { useEffect, useState } from "react";
import usePostSupplier from "../../../hooks/usePostSupplier";
import usePutSupplier from "../../../hooks/usePutSupplier";
import useDeleteSupplier from "../../../hooks/useDeleteSupplier";
import useGetSupplier from "../../../hooks/useGetSupplier";
import { Button } from "@radix-ui/themes";
import Pagination from "../../components/pagination"
import ViewSupplier from "./viewSupplier";
import HeadTableSupplier from "./headTableSupplier";
import AlertDelete from "../../components/alertDelete";
import FormSupplier from "./formSupplier";

export default function boxSupplier() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentSupplier, setCurrentSupplier] = useState(null);
  const [selectedSupplierId, setSelectedSupplierId] = useState(null);

  const { suppliers, setSuppliers } = useGetSupplier();

  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const amount = 5; // Número de itens por página
  const totalPages = Math.ceil(suppliers.length / amount);
  const startIndex = (currentPage - 1) * amount;
  const currentSuppliers = suppliers.slice(startIndex, startIndex + amount);

  const {
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
  } = usePostSupplier();

  const {
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
  } = usePutSupplier((updatedData) => {
    // Atualiza a lista local com a edição
    setSuppliers((prev) =>
      prev.map((supplier) =>
        supplier.id === updatedData.id ? updatedData : supplier
      )
    );
  });

  const { deleteSupplier } = useDeleteSupplier((deletedId) => {
    setSuppliers((prev) =>
      prev.filter((supplier) => supplier.id !== deletedId)
    );
  });

  // Edição de almoxarifado
  const handleEditSupplier = (supplier) => {
    setCurrentSupplier(supplier);
    handleEdit(supplier);
    setIsDialogOpen(true);
  };

  // Atualiza os campos de edição com o almoxarifado selecionado
  useEffect(() => {
    if (currentSupplier) {
      setUpdatedNomeRazaoSocial(currentSupplier.nomeRazaoSocial);
      setUpdatedCpfCnpj(currentSupplier.cpfCnpj);
      setUpdatedTelefone(currentSupplier.telefone);
      setUpdatedEmail(currentSupplier.email);
      setUpdatedRgInscricaoEstadual(currentSupplier.rgInscricaoEstadual);
      setUpdatedTipo(currentSupplier.tipo);
      setUpdatedAtivo(currentSupplier.ativo);
      setUpdatedOptanteSimples(currentSupplier.optanteSimples);
      setUpdatedLimiteCredito(currentSupplier.limiteCredito);
      setUpdatedNumeroPisPasepNit(currentSupplier.numeroPisPasepNit);
      setUpdatedCep(currentSupplier.cep);
      setUpdatedCidade(currentSupplier.cidade);
      setUpdatedUf(currentSupplier.uf);
      setUpdatedLogradouro(currentSupplier.logradouro);
      setUpdatedNumero(currentSupplier.numero);
      setUpdatedBairro(currentSupplier.bairro);
      setUpdatedComplemento(currentSupplier.complemento);
      setUpdatedCodigoIbge(currentSupplier.codigoIbge);
      setUpdatedNomeFantasia(currentSupplier.nomeFantasia);
      setUpdatedAtividade(currentSupplier.atividade);
      setUpdatedCrt(currentSupplier.crt);
      setUpdatedLiberado(currentSupplier.liberado);
      setUpdatedDesconto(currentSupplier.desconto);
      setUpdatedFormaPagamentoId(currentSupplier.formaPagamentoId);
      setUpdatedCondicaoPagamentoId(currentSupplier.condicaoPagamentoId);
      setUpdatedInscricaoMunicipal(currentSupplier.inscricaoMunicipal);
    } else {
      clearForm();
    }
  }, [currentSupplier]);

  // Limpa os campos do formulário
  const clearForm = () => {
    setNomeRazaoSocial("");
    setCpfCnpj("");
    setTelefone("");
    setEmail("");
    setRgInscricaoEstadual("");
    setTipo("");
    setAtivo("");
    setOptanteSimples("");
    setLimiteCredito("");
    setNumeroPisPasepNit("");
    setCep("");
    setCidade("");
    setUf('');
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
    setCurrentSupplier(null);
  };

  // Salva o almoxarifado (cadastrar ou atualizar)
  const handleSave = (event) => {
    if (currentSupplier) {
      handleUpdate();
    } else {
      cadastrarFornecedor(event);
    }
    clearForm();
    setIsDialogOpen(false);
  };

  // Clique no botão de excluir
  const handleDeleteClick = (id) => {
    setSelectedSupplierId(id); // Salva o ID do almoxarifado a ser excluído
    setIsDeleteModalOpen(true);
  };

  // Confirma exclusão
  const confirmDelete = () => {
    if (selectedSupplierId) {
      deleteSupplier(selectedSupplierId);
      setSelectedSupplierId(null);
    }
    setIsDeleteModalOpen(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const [dropdownOpenId, setDropdownOpenId] = useState(null); 

  const toggleDropdown = (id) => {
    if (dropdownOpenId === id) {
      setDropdownOpenId(null); 
    } else {
      setDropdownOpenId(id);
    }
  };

  return (
    <div className="w-[70vw] bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between">
        <h3>Fornecedores</h3>
        <Button onClick={() => setIsDialogOpen(true)}>Adicionar</Button>
      </div>
      <hr />
      <div className="overflow-hidden">
        <table className="min-w-full table-auto">
          <HeadTableSupplier/>
          <ViewSupplier
            currentSuppliers={currentSuppliers}
            handleEditSupplier={handleEditSupplier}
            handleDeleteClick={handleDeleteClick}
            dropdownOpenId={dropdownOpenId}
            toggleDropdown={toggleDropdown}
          />
        </table>
        <div className="w-full flex justify-center mt-4 gap-1">
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
        </div>
      </div>
      {isDialogOpen && (
          <FormSupplier
          currentSupplier={currentSupplier}
          nomeRazaoSocial={nomeRazaoSocial}
          setNomeRazaoSocial={setNomeRazaoSocial}
          updatedNomeRazaoSocial={updatedNomeRazaoSocial}
          setUpdatedNomeRazaoSocial={setUpdatedNomeRazaoSocial}
          cpfCnpj={cpfCnpj}
          setCpfCnpj={setCpfCnpj}
          updatedCpfCnpj={updatedCpfCnpj}
          setUpdatedCpfCnpj={setUpdatedCpfCnpj}
          telefone={telefone}
          setTelefone={setTelefone}
          updatedTelefone={updatedTelefone}
          setUpdatedTelefone={setUpdatedTelefone}
          email={email}
          setEmail={setEmail}
          updatedEmail={updatedEmail}
          setUpdatedEmail={setUpdatedEmail}
          rgInscricaoEstadual={rgInscricaoEstadual}
          setRgInscricaoEstadual={setRgInscricaoEstadual}
          updatedRgInscricaoEstadual={updatedRgInscricaoEstadual}
          setUpdatedRgInscricaoEstadual={setUpdatedRgInscricaoEstadual}
          tipo={tipo}
          setTipo={setTipo}
          updatedTipo={updatedTipo}
          setUpdatedTipo={setUpdatedTipo}
          ativo={ativo}
          setAtivo={setAtivo}
          updatedAtivo={updatedAtivo}
          setUpdatedAtivo={setUpdatedAtivo}
          optanteSimples={optanteSimples}
          setOptanteSimples={setOptanteSimples}
          updatedOptanteSimples={updatedOptanteSimples}
          setUpdatedOptanteSimples={setUpdatedOptanteSimples}
          limiteCredito={limiteCredito}
          setLimiteCredito={setLimiteCredito}
          updatedLimiteCredito={updatedLimiteCredito}
          setUpdatedLimiteCredito={setUpdatedLimiteCredito}
          numeroPisPasepNit={numeroPisPasepNit}
          setNumeroPisPasepNit={setNumeroPisPasepNit}
          updatedNumeroPisPasepNit={updatedNumeroPisPasepNit}
          setUpdatedNumeroPisPasepNit={setUpdatedNumeroPisPasepNit}
          cep={cep}
          setCep={setCep}
          updatedCep={updatedCep}
          setUpdatedCep={setUpdatedCep}
          cidade={cidade}
          setCidade={setCidade}
          updatedCidade={updatedCidade}
          setUpdatedCidade={setUpdatedCidade}
          uf={uf}
          setUf={setUf}
          updatedUf={updatedUf}
          setUpdatedUf={setUpdatedUf}
          logradouro={logradouro}
          setLogradouro={setLogradouro}
          updatedLogradouro={updatedLogradouro}
          setUpdatedLogradouro={setUpdatedLogradouro}
          numero={numero}
          setNumero={setNumero}
          updatedNumero={updatedNumero}
          setUpdatedNumero={setUpdatedNumero}
          bairro={bairro}
          setBairro={setBairro}
          updatedBairro={updatedBairro}
          setUpdatedBairro={setUpdatedBairro}
          complemento={complemento}
          setComplemento={setComplemento}
          updatedComplemento={updatedComplemento}
          setUpdatedComplemento={setUpdatedComplemento}
          codigoIbge={codigoIbge}
          setCodigoIbge={setCodigoIbge}
          updatedCodigoIbge={updatedCodigoIbge}
          setUpdatedCodigoIbge={setUpdatedCodigoIbge}
          nomeFantasia={nomeFantasia}
          setNomeFantasia={setNomeFantasia}
          updatedNomeFantasia={updatedNomeFantasia}
          setUpdatedNomeFantasia={setUpdatedNomeFantasia}
          atividade={atividade}
          setAtividade={setAtividade}
          updatedAtividade={updatedAtividade}
          setUpdatedAtividade={setUpdatedAtividade}
          crt={crt}
          setCrt={setCrt}
          updatedCrt={updatedCrt}
          setUpdatedCrt={setUpdatedCrt}
          liberado={liberado}
          setLiberado={setLiberado}
          updatedLiberado={updatedLiberado}
          setUpdatedLiberado={setUpdatedLiberado}
          desconto={desconto}
          setDesconto={setDesconto}
          updatedDesconto={updatedDesconto}
          setUpdatedDesconto={setUpdatedDesconto}
          formaPagamentoId={formaPagamentoId}
          setFormaPagamentoId={setFormaPagamentoId}
          updatedFormaPagamentoId={updatedFormaPagamentoId}
          setUpdatedFormaPagamentoId={setUpdatedFormaPagamentoId}
          condicaoPagamentoId={condicaoPagamentoId}
          setCondicaoPagamentoId={setCondicaoPagamentoId}
          updatedCondicaoPagamentoId={updatedCondicaoPagamentoId}
          setUpdatedCondicaoPagamentoId={setUpdatedCondicaoPagamentoId}
          inscricaoMunicipal={inscricaoMunicipal}
          setInscricaoMunicipal={setInscricaoMunicipal}
          updatedInscricaoMunicipal={updatedInscricaoMunicipal}
          setUpdatedInscricaoMunicipal={setUpdatedInscricaoMunicipal}
          clearForm={clearForm}
          handleSave={handleSave}
          setIsDialogOpen={setIsDialogOpen}
        />
      )} 

      {isDeleteModalOpen && (
        <AlertDelete
          confirmDelete={confirmDelete}
          isDeleteModalOpen={isDeleteModalOpen}
        />
      )}
    </div>
  );
}
