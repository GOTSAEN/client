import React from 'react'
import { SunMedium, Moon } from 'lucide-react'
import { useDarkMode } from '@/context/DarkModeContext'
import { Button } from '@/components/ui/button'

export default function Header() {
  const { darkMode, toggleDarkMode } = useDarkMode()

  return (
    <header className='relative h-20 grid items-center grow'>
      <h1 className='text-center'>로고</h1>
      <div className='absolute index-y-0 right-0 flex'>
        <Button>로그인</Button>
        <button className='mx-3' onClick={toggleDarkMode}>
          {darkMode ? <SunMedium /> : <Moon />}
        </button>
      </div>
    </header>
  )
}