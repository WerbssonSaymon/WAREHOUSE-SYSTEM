import React from "react";

export default function headTableSupplier() {
  return (
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
  );
}
