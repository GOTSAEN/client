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
import { useAuth } from '@/context/AuthContext'

export default function ProductDropDownMenu() {
  const { user } = useAuth()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('px-2')}>
        <Gift size={15} />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>광고상품 관리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user.auth === 'advertisement' && (
          <>
            <DropdownMenuItem>
              <Link to='/setting/partner/ads/enroll'>
                모집 상품
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to='/setting/partner/ads/progress'>
                진행 상품
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to='/setting/partner/ads/past'>
                지난 상품
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link to='/product/create'>새 상품 등록</Link>
            </DropdownMenuItem>
          </>
        )}
        {user.auth === 'youtuber' && (
          <>
            <DropdownMenuItem>
              <Link to='/setting/ads/progress'>
                진행 상품
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to='/setting/ads/waiting'>
                대기 상품
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Link to='/setting/ads/past'>지난 상품</Link>
            </DropdownMenuItem>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
