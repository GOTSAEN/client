import Menu from '@/components/setting/menu'
import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'

export default function Setting() {
  return (
    <section className='w-full h-full flex'>
      <Menu />
      <main className='py-8 w-full px-4'>
        <Outlet />
      </main>
    </section>
  )
}
