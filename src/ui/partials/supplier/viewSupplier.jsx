import React, { useState } from 'react';
import useGetSupplier from '../../../hooks/useGetSupplier';
import Pagination from '../../components/pagination'

export default function viewSupplier() {

  const { suppliers, setSuppliers } = useGetSupplier();  // Corrigido para desestruturar o objeto

  const [currentPage, setCurrentPage] = useState(1);
  const amount = 7; 
  const totalPages = Math.ceil(suppliers.length / amount);
  const startIndex = (currentPage - 1) * amount;
  const currentSuppliers = suppliers.slice(startIndex, startIndex + amount);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
    <table className="min-w-full table-auto">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-4 py-4 text-left">ID</th>
          <th scope="col" className="px-4 py-3 text-left">ID empresa</th>
          <th scope="col" className="px-4 py-3 text-left">Tipo</th>
          <th scope="col" className="px-4 py-3 text-left">
            <span className="sr-only">Ações</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {currentSuppliers.length > 0 ? (
          currentSuppliers.map((supplier) => (
            <tr key={supplier.id} className="border-b dark:border-gray-700">
              <td className="py-2 px-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {supplier.id}
              </td>
              <td className="py-2 px-4">
                <div className="w-64 text-left text-sm font-medium">
                  {supplier.empresaId}
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="w-64 text-left text-sm font-medium">
                  {supplier.nomeRazaoSocial}
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="w-64 text-left text-sm font-medium">
                  {supplier.cpfCnpj}
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="w-64 text-left text-sm font-medium">
                  {supplier.numeroTelefone}
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="w-64 text-left text-sm font-medium">
                  {supplier.email}
                </div>
              </td>
              <td className="py-2 px-4">
                <div className="w-64 text-left text-sm font-medium">
                  {supplier.ativo}
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
    <Pagination
      totalPages={totalPages}
      currentPage={currentPage}
      handlePageChange={handlePageChange}
    />
  </>
  )
}
