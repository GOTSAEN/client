import {
  NavigationMenuItem,
  NavigationMenuLink,
} from '@/components/ui/navigation-menu'
import { Link } from 'react-router-dom'
import { navigation_styles } from './menu'

export default function YoutuberMenu() {
  const url = '/setting/ads/'
  const items = [
    { key: 'bookmark', name: '찜한 광고' },
    { key: 'progress', name: '진행 광고' },
    { key: 'waiting', name: '대기 광고' },
    { key: 'past', name: '종료 광고' },
  ]
  return (
    <>
      {items.map(({ key, name }) => (
        <NavigationMenuItem className='w-full' key={key}>
          <Link
            to={url + key}
            className='px-0'
            legacyBehavior
            passHref
          >
            <NavigationMenuLink
              className={navigation_styles}
            >
              {name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </>
  )
}
