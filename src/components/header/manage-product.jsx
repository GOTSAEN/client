import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/utils/lib';
import { useAuth } from '@/context/AuthContext';
import { Button } from '../ui/button';

export default function ProductDropDownMenu() {
  const { user } = useAuth();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="bright">
          <Gift size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>광고상품 관리</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {user.auth === 'advertisement' && (
          <>
            <Link to="/setting/partner/ads/waiting">
              <DropdownMenuItem>모집 광고</DropdownMenuItem>
            </Link>
            <Link to="/setting/partner/ads/progress">
              <DropdownMenuItem>진행 광고</DropdownMenuItem>
            </Link>
            <Link to="/setting/partner/ads/past">
              <DropdownMenuItem>종료 광고</DropdownMenuItem>
            </Link>
            <DropdownMenuSeparator />
            <Link to="/product/create">
              <DropdownMenuItem>새 상품 등록</DropdownMenuItem>
            </Link>
          </>
        )}
        {user.auth === 'youtuber' && (
          <>
            <Link to="/setting/ads/progress">
              <DropdownMenuItem>진행 상품</DropdownMenuItem>
            </Link>
            <Link to="/setting/ads/waiting">
              <DropdownMenuItem>대기 상품</DropdownMenuItem>
            </Link>
            <Link to="/setting/ads/past">
              <DropdownMenuItem>지난 상품</DropdownMenuItem>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
