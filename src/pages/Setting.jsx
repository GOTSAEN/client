import Menu from '@/components/setting/menu'
import MenuBar from '@/components/setting/menu-bar'
import React, { Children } from 'react'
import { Outlet } from 'react-router-dom'

export default function Setting() {
  return (
    <section className='w-full h-full flex relative max-sm:flex-col'>
      <div className='max-sm:hidden'>
        <Menu />
      </div>
      <MenuBar />

      <main className='py-8 w-full px-4'>
        <Outlet />
      </main>
    </section>
  )
}
