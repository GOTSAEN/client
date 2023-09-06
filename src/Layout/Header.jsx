import React from 'react'
import { SunMedium, Moon } from 'lucide-react'
import { useDarkMode } from '@/context/DarkModeContext'
import { Button } from '@/components/ui/button'
import ProductDropDownMenu from '@/components/header/manage-product'
import { Link } from 'react-router-dom'

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className='relative h-20 grid items-center grow'>
      <h1 className='text-center'>로고</h1>
      <div className='absolute index-y-0 right-0 flex'>
        <button className='text-sm mr-2 text-zinc-500 hover:text-blue-800'>
          <Link to='/product/create'>상품등록</Link>
        </button>
        <Button>로그인</Button>
        <ProductDropDownMenu />
        <button className='mx-3' onClick={toggleDarkMode}>
          {darkMode ? (
            <SunMedium size={15} />
          ) : (
            <Moon size={15} />
          )}
        </button>
      </div>
    </header>
  )
}
