import React from 'react'
import * as Select from '@radix-ui/react-select';

export default function selectTypeInterprise({ tipo, setTipo }) {
  return (
    <Select.Root value={tipo} onValueChange={setTipo}>
      <Select.Trigger className="inline-flex items-center justify-between px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm w-28">
        <Select.Value placeholder="Tipos" />
        <Select.Icon />
      </Select.Trigger>
      <Select.Content className="bg-white border border-gray-300 rounded-md shadow-md">
        <Select.Viewport>
          <Select.Item value="1" className="px-3 py-2 cursor-pointer hover:bg-gray-100">
            <Select.ItemText>1</Select.ItemText>
          </Select.Item>
          <Select.Item value="2" className="px-3 py-2 cursor-pointer hover:bg-gray-100">
            <Select.ItemText>2</Select.ItemText>
          </Select.Item>
          <Select.Item value="3" className="px-3 py-2 cursor-pointer hover:bg-gray-100">
            <Select.ItemText>3</Select.ItemText>
          </Select.Item>
        </Select.Viewport>
      </Select.Content>
    </Select.Root>
  )
}
