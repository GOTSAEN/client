import React from 'react'
import { SunMedium, Moon, UserCircle2 } from 'lucide-react'
import { useDarkMode } from '@/context/DarkModeContext'
import { Button } from '@/components/ui/button'
import ProductDropDownMenu from '@/components/header/manage-product'
import { Link } from 'react-router-dom'

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
            <Link to='/login'>
              <UserCircle2 size={15} />
            </Link>
          </div>

          <ProductDropDownMenu />
          <button className='mx-3' onClick={toggleDarkMode}>
            {darkMode ? (
              <SunMedium size={15} />
            ) : (
              <Moon size={15} />
            )}
          </button>
        </div>
      </div>
    </header>
  )
}
