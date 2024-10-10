import React from "react";

export default function headTableWarehouse() {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
      <tr>
        <th scope="col" className="px-4 py-4 text-left">
          ID
        </th>
        <th scope="col" className="px-4 py-3 text-left">
          Descrição
        </th>
        <th scope="col" className="px-4 py-3 text-left">
          Tipo
        </th>
        <th scope="col" className="px-4 py-3 text-left">
          <span className="sr-only">Ações</span>
        </th>
      </tr>
    </thead>
  );
}
