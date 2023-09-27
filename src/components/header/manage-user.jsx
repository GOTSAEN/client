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
export default function UserDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('px-2')}>
        <UserCircle2 size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>민준기 님</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to='/setting/ads/waiting'>회원정보</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to='/setting/ads/past'>패스워드 변경</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to='/logout' className='flex items-center'>
            <LogOut size={15} className='mr-2' />
            로그아웃
          </Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
