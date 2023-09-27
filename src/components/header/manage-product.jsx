import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Gift, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/lib'

export default function ProductDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('px-2')}>
        <Settings size={15} fill='#D8D9DA' />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>광고상품 관리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to='/setting/ads/progress'>진행 상품</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to='/setting/ads/waiting'>대기 상품</Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to='/setting/ads/past'>지난 상품</Link>
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <Link to='/product/create'>새 상품 등록</Link>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}