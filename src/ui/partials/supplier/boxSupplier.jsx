import React, { useEffect, useState } from "react";
import usePostSupplier from "../../../hooks/usePostSupplier";
import usePutSupplier from "../../../hooks/usePutSupplier";
import useDeleteSupplier from "../../../hooks/useDeleteSupplier";
import useGetSupplier from "../../../hooks/useGetSupplier";
import { Button } from "@radix-ui/themes";

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
    setTipo(1);
    setAtivo(true);
    setOptanteSimples(true);
    setLimiteCredito(0);
    setNumeroPisPasepNit("");
    setCep("");
    setCidade("");
    setUf(1);
    setLogradouro("");
    setNumero("");
    setBairro("");
    setComplemento("");
    setCodigoIbge(0);
    setNomeFantasia("");
    setAtividade(1);
    setCrt(1);
    setLiberado(true);
    setDesconto(0);
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

  return (
    <div className="w-[70vw] bg-white border border-gray-100 shadow-md shadow-black/5 p-6 rounded-md">
      <div className="flex justify-between">
        <h3>Fornecedores</h3>
        <Button onClick={() => setIsDialogOpen(true)}>Adicionar</Button>
      </div>
      <hr />
      <div className="overflow-hidden">
        <table className="min-w-full table-auto">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-4 py-4 text-left">
                ID
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                ID empresa
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                Nome razão social
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                cpf/cnpj
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                telefone
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                email
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                ativo
              </th>
              <th scope="col" className="px-4 py-3 text-left">
                <span className="sr-only">Ações</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentSuppliers.length > 0 ? (
              currentSuppliers.map((supplier) => (
                <tr key={supplier.id} className="border-b">
                  <td className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {supplier.id}
                  </td>
                  <td className="py-2 px-4">
                    <div className=" text-left text-sm font-medium">
                      {supplier.empresaId}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className=" text-left text-sm font-medium">
                      {supplier.nomeRazaoSocial}
                    </div>
                  </td>
                   <td className="py-2 px-4">
                    <div className=" text-left text-sm font-medium">
                      {supplier.cpfCnpj}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className=" text-left text-sm font-medium">
                      {supplier.numeroTelefone}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className=" text-left text-sm font-medium">
                      {supplier.email}
                    </div>
                  </td>
                  <td className="py-2 px-4">
                    <div className=" text-left text-sm font-medium">
                      {supplier.ativo}
                    </div>
                  </td> 
                  <td className="py-2 px-4">
                    <div className="relative inline-block text-left">
                      <button
                        type="button"
                        onClick={() => handleEditSupplier(supplier)}
                        className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50"
                      >
                        Editar
                      </button>
                      <button
                        type="button"
                        className="ml-2 inline-flex justify-center w-full rounded-md border border-red-300 shadow-sm px-4 py-2 bg-red-600 text-sm font-medium text-white hover:bg-red-700"
                        onClick={() => handleDeleteClick(supplier.id)}
                      >
                        Excluir
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="py-4 text-center">
                  Nenhum almoxarifado encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <div className="w-full flex justify-center mt-4 gap-1">
          {Array.from({ length: totalPages }, (_, index) => (
            <Button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "!bg-orange-500 !text-white"
                  : "!bg-gray-400"
              }`}
            >
              {index + 1}
            </Button>
          ))}
        </div>
      </div>

      {/* Formulário para cadastrar/atualizar almoxarifado */}
      <div className="mt-4">
        {/* Nome/Razão Social */}
        <label className="block text-sm font-medium text-gray-700">
          Razão Social:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedNomeRazaoSocial : nomeRazaoSocial}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedNomeRazaoSocial(e.target.value)
              : setNomeRazaoSocial(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* CPF/CNPJ */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          CPF/CNPJ:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedCpfCnpj : cpfCnpj}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedCpfCnpj(e.target.value)
              : setCpfCnpj(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Telefone */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Telefone:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedTelefone : telefone}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedTelefone(e.target.value)
              : setTelefone(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* E-mail */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          E-mail:
        </label>
        <input
          type="email"
          value={currentSupplier ? updatedEmail : email}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedEmail(e.target.value)
              : setEmail(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* RG/Inscrição Estadual */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          RG/Inscrição Estadual:
        </label>
        <input
          type="text"
          value={
            currentSupplier ? updatedRgInscricaoEstadual : rgInscricaoEstadual
          }
          onChange={(e) =>
            currentSupplier
              ? setUpdatedRgInscricaoEstadual(e.target.value)
              : setRgInscricaoEstadual(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Tipo */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Tipo:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedTipo : tipo}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedTipo(e.target.value)
              : setTipo(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

{/* Ativo */}
<label className="block text-sm font-medium text-gray-700 mt-4">
          Tipo:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedAtivo : ativo}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedAtivo(e.target.value)
              : setAtivo(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />


        {/* Optante pelo Simples */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Optante pelo Simples:
        </label>
        <input
          type="checkbox"
          checked={currentSupplier ? updatedOptanteSimples : optanteSimples}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedOptanteSimples(e.target.checked)
              : setOptanteSimples(e.target.checked)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Limite de Crédito */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Limite de Crédito:
        </label>
        <input
          type="number"
          value={currentSupplier ? updatedLimiteCredito : limiteCredito}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedLimiteCredito(e.target.value)
              : setLimiteCredito(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Número PIS/PASEP/NIT */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Número PIS/PASEP/NIT:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedNumeroPisPasepNit : numeroPisPasepNit}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedNumeroPisPasepNit(e.target.value)
              : setNumeroPisPasepNit(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* CEP */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          CEP:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedCep : cep}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedCep(e.target.value)
              : setCep(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Cidade */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Cidade:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedCidade : cidade}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedCidade(e.target.value)
              : setCidade(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* UF */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          UF:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedUf : uf}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedUf(e.target.value)
              : setUf(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Logradouro */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Logradouro:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedLogradouro : logradouro}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedLogradouro(e.target.value)
              : setLogradouro(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Número */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Número:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedNumero : numero}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedNumero(e.target.value)
              : setNumero(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Bairro */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Bairro:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedBairro : bairro}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedBairro(e.target.value)
              : setBairro(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Complemento */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Complemento:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedComplemento : complemento}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedComplemento(e.target.value)
              : setComplemento(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Código IBGE */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Código IBGE:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedCodigoIbge : codigoIbge}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedCodigoIbge(e.target.value)
              : setCodigoIbge(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Nome Fantasia */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Nome Fantasia:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedNomeFantasia : nomeFantasia}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedNomeFantasia(e.target.value)
              : setNomeFantasia(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Atividade */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Atividade:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedAtividade : atividade}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedAtividade(e.target.value)
              : setAtividade(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* CRT */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          CRT:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedCrt : crt}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedCrt(e.target.value)
              : setCrt(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Liberado */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Liberado:
        </label>
        <input
          type="checkbox"
          checked={currentSupplier ? updatedLiberado : liberado}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedLiberado(e.target.checked)
              : setLiberado(e.target.checked)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Desconto */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Desconto:
        </label>
        <input
          type="number"
          value={currentSupplier ? updatedDesconto : desconto}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedDesconto(e.target.value)
              : setDesconto(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Forma de Pagamento */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Forma de Pagamento:
        </label>
        <input
          type="text"
          value={currentSupplier ? updatedFormaPagamentoId : formaPagamentoId}
          onChange={(e) =>
            currentSupplier
              ? setUpdatedFormaPagamentoId(e.target.value)
              : setFormaPagamentoId(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Condição de Pagamento */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Condição de Pagamento:
        </label>
        <input
          type="text"
          value={
            currentSupplier ? updatedCondicaoPagamentoId : condicaoPagamentoId
          }
          onChange={(e) =>
            currentSupplier
              ? setUpdatedCondicaoPagamentoId(e.target.value)
              : setCondicaoPagamentoId(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />

        {/* Inscrição Municipal */}
        <label className="block text-sm font-medium text-gray-700 mt-4">
          Inscrição Municipal:
        </label>
        <input
          type="text"
          value={
            currentSupplier ? updatedInscricaoMunicipal : inscricaoMunicipal
          }
          onChange={(e) =>
            currentSupplier
              ? setUpdatedInscricaoMunicipal(e.target.value)
              : setInscricaoMunicipal(e.target.value)
          }
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>

      <div className="mt-6 flex justify-end">
        <Button className="mr-2" onClick={clearForm}>
          Cancelar
        </Button>
        <Button onClick={handleSave}>
          {currentSupplier ? "Atualizar" : "Cadastrar"}
        </Button>
      </div>

      {/* Modal de exclusão */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white rounded-lg p-6 shadow-lg">
            <h3 className="text-lg font-medium text-gray-900">Excluir Item</h3>
            <p className="text-sm text-gray-500 mt-2">
              Tem certeza que deseja excluir este almoxarifado? Esta ação não
              pode ser desfeita.
            </p>
            <div className="mt-4 flex justify-end">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                onClick={confirmDelete}
              >
                Confirmar
              </button>
              <button
                className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
                onClick={() => setIsDeleteModalOpen(false)}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
