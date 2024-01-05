import React, { memo } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link, useNavigate } from 'react-router-dom';
import SearchBar from '@/components/common/SearchBar';
import { ListItem } from '@/components/ui/list-item';
import { useCategory } from '@/hooks/use-category';

const HorizontalMenuBar = memo(() => {
  const navigate = useNavigate();
  const { categories } = useCategory();
  return (
    <nav className="flex px-2 border-b-[1px] justify-center py-2 ">
      <div className="flex max-w-[1400px] w-full justify-between">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>카테고리</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid max-w-[600px] gap-3 p-4 lg:grid-cols-3 md:w-[500px] md:grid-cols-2 sm:w-[400px] sm:grid-cols-2">
                  {categories &&
                    categories?.map(({ categoryId, categoryName }) => (
                      <ListItem
                        key={categoryId}
                        title={categoryName}
                        onClick={() => navigate(`ads?category=${categoryName}`)}
                      />
                    ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to="/youtuber">
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>유튜버</NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SearchBar />
      </div>
    </nav>
  );
});

export default HorizontalMenuBar;
