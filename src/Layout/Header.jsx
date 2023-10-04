import React from 'react'
import { SunMedium, Moon } from 'lucide-react'
import { useDarkMode } from '@/context/DarkModeContext'
import ProductDropDownMenu from '@/components/header/manage-product'
import { Link } from 'react-router-dom'
import UserDropDownMenu from '@/components/header/manage-user'

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className='relative h-20 flex justify-center w-full items-center'>
      <div className='relative max-w-[1400px] w-fit flex grow justify-center items-center'>
        <h1 className='text-center'>
          {' '}
          <Link to='/'>LOGO</Link>
        </h1>
        <div className='absolute index-y-0 right-0 flex'>
          <div className='px-2'>
            <UserDropDownMenu />
          </div>

          <ProductDropDownMenu />
          <button className='mx-3' onClick={toggleDarkMode}>
            {darkMode ? (
              <SunMedium size={15} fill='#A73121' />
            ) : (
              <Moon size={15} fill='#FFCC70' />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
