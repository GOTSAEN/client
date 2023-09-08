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
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { fetchCategories } from '@/api/menu/menu'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, search } from 'lucide-react'

export default function HorizontalMenuBar() {
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
    <nav className='h-12 flex px-2 py-2 border-b-[1px] justify-center'>
      <div className='flex max-w-[1400px] w-full justify-between'>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                카테고리
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className='grid w-[400px] gap-3 p-4 lg:w-[600px] lg:grid-cols-3 md:w-[500px] md:grid-cols-2'>
                  {categories?.map((component) => (
                    <ListItem
                      key={component.title}
                      title={component.title}
                      href={component.href}
                    ></ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href='/guide' legacyBehavior passHref>
                <NavigationMenuLink
                  className={navigationMenuTriggerStyle()}
                >
                  가이드
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
        <div className='flex w-[300px] items-center'>
          <Input
            type='text'
            className={cn(
              'grow-0 rounded-none rounded-l-lg focus-visible:ring-0 focus-visible:ring-offset-0'
            )}
          />
          <Button
            type='submit'
            className={cn(
              'w-fit px-3 rounded-none rounded-r-lg'
            )}
          >
            <Search size={14} />
          </Button>
        </div>
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
