import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/lib'
import { UserCircle2, LogOut } from 'lucide-react'
import { useAuth } from '@/context/AuthContext'
export default function UserDropDownMenu() {
  const { logout, user } = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('flex')}>
        <UserCircle2 size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          {user.email?.split('@')[0]} 님
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <Link to='/setting/me/profile'>
          <DropdownMenuItem>회원정보</DropdownMenuItem>
        </Link>
        <Link to='/setting/me/pwchange'>
          <DropdownMenuItem>패스워드 변경</DropdownMenuItem>
        </Link>
        <DropdownMenuSeparator />
        <DropdownMenuItem
          onClick={logout}
          className='cursor-pointer'
        >
          <LogOut size={15} className='mr-2' />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
