import React, { memo } from 'react';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { cn } from '@/utils/lib';
import { Link, useLocation } from 'react-router-dom';
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu';
import { MENU_ITEMS } from '@/data/setting-auth-menu';
import { useAuth } from '@/context/AuthContext';

export const navigation_styles =
  'group inline-flex h-10 bg-transparent w-max items-center justify-center rounded-md  rounded-none bg-background px-4 py-2 text-sm font-medium transition-colors border-l-[1px] hover:border-gray-500  hover:brightness-110 focus:bg-accent focus:text-accent/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 w-full';
export const highlight_navigation_styles = navigation_styles + ' border-zinc-900';

const Menu = memo(() => {
  const { user } = useAuth();
  const location = useLocation();
  const menus = MENU_ITEMS[user?.auth];

  return (
    <nav className="w-fit mt-4 pl-2 pr-12 sticky top-[140px]">
      <div className="sticky top-40 max-sm:static">
        <NavigationMenu>
          <NavigationMenuList className={cn('flex flex-col')}>
            {menus?.map((menu) => (
              <div key={menu.key}>
                <DropdownMenuLabel className="text-sm font-semibold px-2 py-2 w-full">{menu.label}</DropdownMenuLabel>
                {menu.menus?.map((item) => (
                  <NavigationMenuItem className="w-full" key={item.path}>
                    <Link to={`${menu.url}${item.path}`}>
                      <NavigationMenuLink
                        className={
                          location.pathname?.includes(item.path) ? highlight_navigation_styles : navigation_styles
                        }
                      >
                        {item.name}
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                ))}
              </div>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </nav>
  );
});

export default Menu;

const ListItem = React.forwardRef(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">{children}</p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
