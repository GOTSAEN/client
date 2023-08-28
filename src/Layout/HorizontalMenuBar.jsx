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
import { Accessibility as Icons } from 'lucide-react'
import { useQuery } from 'react-query'
import { fetchCategories } from '@/api/menu/menu'

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
    <nav className='px-2 py-1 border-b-[1px]'>
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
            <Link href='/docs' legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
              >
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
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
