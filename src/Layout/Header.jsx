import React, { useEffect } from 'react'
import { useDarkMode } from '@/context/DarkModeContext'
import { useAuth } from '@/context/AuthContext'
import UserDropDownMenu from '@/components/header/manage-user'
import ProductDropDownMenu from '@/components/header/manage-product'
import { Link, useNavigate } from 'react-router-dom'
import { SunMedium, Moon, UserCircle2 } from 'lucide-react'
import Logo from '@/components/common/Logo'
import { Button } from '@/components/ui/button'

export default function Header() {
  const navigate = useNavigate()
  const { darkMode, toggleDarkMode } = useDarkMode()
  const { user, login } = useAuth()
  useEffect(() => {
    login()
  }, [])
  return (
    <header className='relative h-20 flex justify-center w-full items-center px-4 cursor-pointer'>
      <div className='relative max-w-[1400px] w-fit flex grow justify-center items-center'>
        <Logo />
        <div className='absolute index-y-0 right-0 flex'>
          <div>
            {user?.auth ? (
              <UserDropDownMenu />
            ) : (
              <Button
                variant='link'
                onClick={() => navigate('/login')}
              >
                로그인
              </Button>
            )}
          </div>

          {user?.email && <ProductDropDownMenu />}
          <Button variant='bright' onClick={toggleDarkMode}>
            {darkMode ? (
              <SunMedium size={15} fill='#A73121' />
            ) : (
              <Moon size={15} fill='#FFCC70' />
            )}
          </Button>
        </div>
      </div>
    </header>
  )
}
