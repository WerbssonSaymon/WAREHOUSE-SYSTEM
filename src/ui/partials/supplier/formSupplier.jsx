import React from "react";

export default function formSupplier({
  supplierData,
  setSupplierData,
  cadastrarFornecedor,
}) {
  const {
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
    inscricaoMunicipal,
  } = supplierData;
  const {
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
  } = setSupplierData;
  return (
    <>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Razão social:
        </label>
        <input
          type="text"
          value={nomeRazaoSocial}
          onChange={(e) => setNomeRazaoSocial(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          CPF/CNPJ:
        </label>
        {/* tem que fazer um componente separado */}
        <input
          type="text"
          value={cpfCnpj}
          onChange={(e) => setCpfCnpj(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Telefone:
        </label>
        <input
          type="text"
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Email:
        </label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          RG Inscrição estadual:
        </label>
        <input
          type="text"
          value={rgInscricaoEstadual}
          onChange={(e) => setRgInscricaoEstadual(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">Tipo:</label>
        <input
          type="text"
          value={tipo}
          onChange={(e) => setTipo(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Optante simples:
        </label>
        <input
          type="text"
          value={optanteSimples}
          onChange={(e) => setOptanteSimples(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Limite de credito:
        </label>
        <input
          type="text"
          value={limiteCredito}
          onChange={(e) => setLimiteCredito(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        {/* MUDAR TAMBEM */}
        <label className="block text-sm font-medium text-gray-700">
          PIS/PASEP/NIT:
        </label>
        <input
          type="text"
          value={numeroPisPasepNit}
          onChange={(e) => setNumeroPisPasepNit(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">CEP:</label>
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">UF:</label>
        <input
          type="text"
          value={uf}
          onChange={(e) => setUf(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Logradouro:
        </label>
        <input
          type="text"
          value={logradouro}
          onChange={(e) => setLogradouro(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Numero:
        </label>
        <input
          type="text"
          value={numero}
          onChange={(e) => setNumero(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Bairro:
        </label>
        <input
          type="text"
          value={bairro}
          onChange={(e) => setBairro(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Complemento:
        </label>
        <input
          type="text"
          value={complemento}
          onChange={(e) => setComplemento(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Codigo IBGE:
        </label>
        <input
          type="text"
          value={codigoIbge}
          onChange={(e) => setCodigoIbge(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Nome fantasia:
        </label>
        <input
          type="text"
          value={nomeFantasia}
          onChange={(e) => setNomeFantasia(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Atividade:
        </label>
        <input
          type="text"
          value={atividade}
          onChange={(e) => setAtividade(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">CRT:</label>
        <input
          type="text"
          value={crt}
          onChange={(e) => setCrt(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Liberado:
        </label>
        <input
          type="text"
          value={liberado}
          onChange={(e) => setLiberado(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
        <label className="block text-sm font-medium text-gray-700">
          Desconto:
        </label>
        <input
          type="text"
          value={desconto}
          onChange={(e) => setDesconto(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Forma de pagamento:
        </label>
        <input
          type="text"
          value={formaPagamentoId}
          onChange={(e) => setFormaPagamentoId(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Condição de pagamento:
        </label>
        <input
          type="text"
          value={condicaoPagamentoId}
          onChange={(e) => setCondicaoPagamentoId(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
        <label className="block text-sm font-medium text-gray-700">
          Inscrição municipal:
        </label>
        <input
          type="text"
          value={inscricaoMunicipal}
          onChange={(e) => setInscricaoMunicipal(e.target.value)}
          className="mt-1 px-3 py-2 border shadow-sm block w-full sm:text-sm border-gray-300 rounded-md"
        />
      </div>
      <div className="mt-4">
      <button
              type="button"
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={cadastrarFornecedor}
            >
              Cadastrar
            </button>
      </div>
    </>
  );
}
