import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'
import { navigation_styles } from './menu'

export default function YoutuberMenu() {
  const url = '/setting/ads/'
  return (
    <>
      <NavigationMenuItem className='w-full'>
        <Link
          to={url + 'progress'}
          className='px-0'
          legacyBehavior
          passHref
        >
          <NavigationMenuLink className={navigation_styles}>
            진행 광고
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className='w-full'>
        <Link to={url + 'waiting'} legacyBehavior passHref>
          <NavigationMenuLink className={navigation_styles}>
            대기 광고
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
      <NavigationMenuItem className='w-full'>
        <Link to={url + 'past'} legacyBehavior passHref>
          <NavigationMenuLink className={navigation_styles}>
            지난 광고
          </NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    </>
  )
}
