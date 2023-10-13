import Menu from '@/components/setting/menu'
import MenuBar from '@/components/setting/menu-bar'
import { Outlet, useLocation } from 'react-router-dom'
export default function Setting() {
  const location = useLocation()
  const admins_url = location.pathname.indexOf('/partner')

  return (
    <section className='w-full h-full flex relative max-sm:flex-col'>
      <div className='max-sm:hidden h-full relative'>
        <Menu />
      </div>
      <MenuBar />

      <main className='py-8 w-full px-4'>
        <Outlet />
      </main>
    </section>
  )
}
