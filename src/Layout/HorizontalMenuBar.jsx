import React from 'react'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu'
import { cn } from '@/utils/lib'
import { Link, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import SearchBar from '@/components/common/SearchBar'
import { fetchCategories } from '@/api/categories'

export default function HorizontalMenuBar() {
  const navigate = useNavigate()
  const {
    isLoading,
    data: categories,
    error,
  } = useQuery(
    ['categories'],
    async () => await fetchCategories().then((res) => res),
    { staleTime: 1000 * 60 * 24 }
  )
  return (
    <nav className='flex px-2 border-b-[1px] justify-center py-2 '>
      <div className='flex max-w-[1400px] w-full justify-between'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                카테고리
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid max-w-[600px] gap-3 p-4 lg:grid-cols-3 md:w-[500px] md:grid-cols-2 sm:w-[400px] sm:grid-cols-2'>
                  {categories?.map((category) => (
                    <ListItem
                      key={category.categoryId}
                      title={category.categoryName}
                      onClick={() =>
                        navigate(
                          `ads/${category.categoryName}`
                        )
                      }
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link to='/youtuber' legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  유튜버
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link
                href='/community'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  커뮤니티
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <SearchBar />
      </div>
    </nav>
  )
}

const ListItem = React.forwardRef(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
              className
            )}
            {...props}
          >
            <div className='text-sm font-medium leading-none'>
              {title}
            </div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'
