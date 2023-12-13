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

import { useAuth } from '@/context/AuthContext';
import { Button } from '../ui/button';
import { MENU_ITEMS } from '@/data/setting-auth-menu';

export default function ProductDropDownMenu() {
  const { user } = useAuth();
  const authMenus = MENU_ITEMS[user?.auth].find((item) => item.key === 'ads');

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="bright">
          <Gift size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{authMenus?.label}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {authMenus?.menus.map((menu) => (
          <Link to={`${authMenus.url}${menu.path}`} key={menu.path}>
            <DropdownMenuItem>{menu.name}</DropdownMenuItem>
          </Link>
        ))}
        {user?.auth === 'advertisement' && (
          <>
            <DropdownMenuSeparator />
            <Link to="/product/create">
              <DropdownMenuItem>새상품 등록</DropdownMenuItem>
            </Link>
          </>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
