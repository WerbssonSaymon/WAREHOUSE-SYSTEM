import React from 'react'
import Menu from '../../ui/partials/menu'
import BoxWarehouse from '../../ui/partials/warehouse/boxWarehouse'
import { Section } from '@radix-ui/themes'

export default function warehouse() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="w-1/6 h-[100vh] flex justify-center items-center">
        <Menu />
      </div>
      <Section className="bg-slate-200 w-5/6 h-[100vh] flex justify-center items-start">
        <BoxWarehouse/>
      </Section>
    </div>
  )
}
