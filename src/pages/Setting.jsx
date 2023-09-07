import Menu from '@/components/setting/menu'
import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Setting() {
  return (
    <section className='h-full'>
      <Menu />
    </section>
  )
}
