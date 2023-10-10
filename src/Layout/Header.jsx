import React, { useEffect } from 'react'
import { useDarkMode } from '@/context/DarkModeContext'
import { useAuth } from '@/context/AuthContext'
import UserDropDownMenu from '@/components/header/manage-user'
import ProductDropDownMenu from '@/components/header/manage-product'
import { Link, useNavigate } from 'react-router-dom'
import { SunMedium, Moon, UserCircle2 } from 'lucide-react'

export default function Header() {
  const navigate = useNavigate()
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { user } = useAuth()
  useEffect(() => {}, [user])
  return (
    <header className='relative h-20 flex justify-center w-full items-center'>
      <div className='relative max-w-[1400px] w-fit flex grow justify-center items-center'>
        <h1 className='text-center'>
          {' '}
          <Link to='/'>LOGO</Link>
        </h1>
        <div className='absolute index-y-0 right-0 flex'>
          <div className='px-2'>
            {user?.email ? (
              <UserDropDownMenu />
            ) : (
              <UserCircle2
                size={15}
                onClick={() => navigate('/login')}
                className='cursor-pointer'
              />
            )}
          </div>

          {user?.email && user?.auth && (
            <ProductDropDownMenu />
          )}
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
