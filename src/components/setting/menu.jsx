import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@/components/ui/navigation-menu'
import { cn } from '@/utils/lib'
import { Link } from 'react-router-dom'
import React from 'react'
import { DropdownMenuLabel } from '@radix-ui/react-dropdown-menu'
import YoutuberMenu from './youtuber-menu'
import { useAuth } from '@/context/AuthContext'
import PartnerMenu from './partner-menu'

export const navigation_styles =
  'group inline-flex h-10 bg-transparent w-max items-center justify-center rounded-md  rounded-none bg-background px-4 py-2 text-sm font-medium transition-colors border-l-[1px] hover:border-zinc-900   hover:brightness-110 focus:bg-accent focus:text-accent/50 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50 w-full'
export default function Menu() {
  const { user } = useAuth()
  return (
    <nav className='w-fit mt-4 pl-2 pr-12 top-0 '>
      <div className='sticky top-40 max-sm:static'>
        <NavigationMenu>
          <NavigationMenuList
            className={cn('flex flex-col')}
          >
            <DropdownMenuLabel className='text-sm font-semibold px-2 py-2 w-full'>
              광고 관리
            </DropdownMenuLabel>
            {user?.auth === 'youtuber' ? (
              <YoutuberMenu />
            ) : (
              <PartnerMenu />
            )}
            <DropdownMenuLabel className='text-sm font-semibold px-2 py-2 w-full'>
              정보 관리
            </DropdownMenuLabel>

            <NavigationMenuItem className='w-full'>
              <Link
                to='/setting/profile'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={navigation_styles}
                >
                  내 정보
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full'>
              <Link
                to='/setting/pwchange'
                className='px-0'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={navigation_styles}
                >
                  패스워드 변경
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className='w-full'>
              <Link
                to='/setting/ads/waiting'
                legacyBehavior
                passHref
              >
                <NavigationMenuLink
                  className={navigation_styles}
                >
                  회원탈퇴
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
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
              'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground ',
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
