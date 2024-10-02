import React from 'react'

export default function selectTypeInterprise({ tipo, setTipo }) {
  return (
    <div>
      <select
        id="tipo"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
        className="inline-flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm w-28"
      >
        <option value="" disabled>
          Tipos
        </option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
    </div>
  )
}
