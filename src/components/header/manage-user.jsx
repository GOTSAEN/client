import React from 'react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Link, useNavigate } from 'react-router-dom';
import { cn } from '@/utils/lib';
import { UserCircle2, LogOut } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { Button } from '../ui/button';
import { MENU_ITEMS } from '@/data/setting-auth-menu';
export default function UserDropDownMenu() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();

  const authMenus = MENU_ITEMS[user?.auth].find((item) => item.key === 'user');

  const handleLogout = () => {
    logout();
    navigate('/login');
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={cn('flex')}>
        <Button variant="bright">
          <UserCircle2 size={15} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{user.email?.split('@')[0]} 님</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {authMenus?.menus.map((menu) => (
          <Link to={`${authMenus.url}${menu.path}`} key={menu.path}>
            <DropdownMenuItem>{menu.name}</DropdownMenuItem>
          </Link>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
          <LogOut size={15} className="mr-2" />
          로그아웃
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
