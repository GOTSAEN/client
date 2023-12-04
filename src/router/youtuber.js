import Secession from '@/pages/Secession';
import PastAds from '@/pages/setting/youtuber/past-ads';
import ProgressAds from '@/pages/setting/youtuber/progress-ads';
import WaitingAds from '@/pages/setting/youtuber/waiting-ads';
import YoutuberProfile from '@/pages/setting/youtuber/youtuber-profile';

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
    path: 'me/profile',
    children: <YoutuberProfile />,
  },
  {
    path: 'secession',
    children: <Secession />,
  },
  {
    path: 'ads/waiting',
    children: <WaitingAds />,
  },
];
