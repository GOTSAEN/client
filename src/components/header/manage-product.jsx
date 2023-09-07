import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Gift } from 'lucide-react'
import { Link } from 'react-router-dom'
import { cn } from '@/utils/lib'

export default function ProductDropDownMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('px-2')}>
        <Gift size={15} />
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
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
