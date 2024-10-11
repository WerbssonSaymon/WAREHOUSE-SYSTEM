esses são os hooks de cadastro e edição: 

import { useState } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function usePostWarehouse() {
  const [empresaId, setEmpresaId] = useState("");
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
      setEmpresaId("");
      setDescricao("");
      setTipo("");
    } catch (error) {
      console.error("Erro ao cadastrar warehouse:", error);
    }
  }
  return {
    empresaId,
    descricao,
    tipo,
    setEmpresaId,
    setDescricao,
    setTipo,
    cadastrarAlmoxarifado,
  };
}

import { useState } from "react";
import axiosInterceptor from "../data/services/axiosInterceptor";
import { useNavigate } from "react-router-dom";

export default function usePutWarehouse(onUpdateWarehouse) {
  const [editWarehouse, setEditWarehouse] = useState(null);
  const [updatedDescription, setUpdatedDescription] = useState("");
  const [updateType, setUpdateType] = useState("");
  
  const apiWarehouse = import.meta.env.VITE_API_WAREHOUSE;
  const navigate = useNavigate()
  const axios = axiosInterceptor(navigate)
  

  const updateWarehouse = async (updatedData) => {
    try {
      const token = JSON.parse(localStorage.getItem("token"));
      const response = await axios.put(`${apiWarehouse}/alterar`, updatedData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        console.log("Atualização bem-sucedida", response.data);
        if (onUpdateWarehouse) {
          onUpdateWarehouse(updatedData);
        } 
      } else {
        console.error("Erro na atualização:", response);
      }
    } catch (error) {
      console.error("Erro ao atualizar almoxarifado:", error);
    }
  };

  const handleEdit = (warehouse) => {
    setEditWarehouse(warehouse);
    setUpdatedDescription(warehouse.descricao);
    setUpdateType(warehouse.tipo);
  };

  const handleUpdate = () => {
    const updatedData = {
      ...editWarehouse, 
      descricao: updatedDescription,
      tipo: updateType,
    };

    updateWarehouse(updatedData);
    setEditWarehouse(null); 
  };

  return {
    updatedDescription,
    updateType,
    setUpdatedDescription,
    setUpdateType,
    handleEdit,
    handleUpdate,
  };
}


agora são os componentes: 

import React from 'react'
import BoxWarehouse from '../../ui/partials/warehouse/boxWarehouse'
import Layout from '../../ui/partials/layout/layout'

export default function warehouse() {
  return (
    <Layout>
      <BoxWarehouse/>
    </Layout>
  )
}

-----------------

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