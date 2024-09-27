import React from 'react'

export default function tableWarehouse() {
  return (
    <div className="overflow-hidden">
        <table className="w-full min-w-[540px]">
          <tbody>
            <tr>
              <td className="py-2 px-4 border-b border-b-gray-50">
                <div className="flex items-center">
                  <a
                    className="text-gray-600 text-sm font-medium hover:text-blue-500 ml-2 truncate"
                  >
                    Id empresa
                  </a>
                </div>
              </td>
              <td className="py-2 px-6 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  Descrição
                </span>
              </td>
              <td className="py-2 px-6 border-b border-b-gray-50">
                <span className="text-[13px] font-medium text-gray-400">
                  tipo
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
  )
}
