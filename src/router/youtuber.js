import Secession from '@/pages/Secession';
import PastAds from '@/pages/setting/youtuber/past-ads';
import ProgressAds from '@/pages/setting/youtuber/progress-ads';
import WaitingAds from '@/pages/setting/youtuber/waiting-ads';
import YoutuberProfile from '@/pages/setting/youtuber/youtuber-profile';
import Bookmarks from '@/pages/setting/youtuber/bookmarks';

export const YOUTUBER_ROUTES = [
  {
    path: 'ads/waiting',
    children: <WaitingAds />,
  },
  {
    path: 'ads/progress',
    children: <ProgressAds />,
  },
  {
    path: 'ads/past',
    children: <PastAds />,
  },
  {
    path: 'ads/bookmark',
    children: <Bookmarks />,
  },
  {
    path: 'profile',
    children: <YoutuberProfile />,
  },
  {
    path: 'secession',
    children: <Secession />,
  },
];
