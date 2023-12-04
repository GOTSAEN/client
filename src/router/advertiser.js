import Secession from '@/pages/Secession';
import PwChange from '@/pages/setting/PwChange';
import PartnerPastAds from '@/pages/setting/partner/past-ads';
import PastYoutuber from '@/pages/setting/partner/past-youtuber';
import PartnerProgressAds from '@/pages/setting/partner/progress-ads';
import ProgressYoutuber from '@/pages/setting/partner/progress-youtuber';
import WaitingYoutuber from '@/pages/setting/partner/waiting-youtuber';
import PartnerWaitingAds from '@/pages/setting/partner/wating-ads';
import Profile from '@/pages/setting/profile';

export const PARTNER_ROUTES = [
  {
    path: 'ads/waiting',
    children: <PartnerWaitingAds />,
  },
  {
    path: 'ads/progress',
    children: <PartnerProgressAds />,
  },
  {
    path: 'ads/past',
    children: <PartnerPastAds />,
  },
  {
    path: 'ads/waiting/campaign/:campaignId',
    children: <WaitingYoutuber />,
  },
  {
    path: 'ads/progress/campaign/:campaignId',
    children: <ProgressYoutuber />,
  },
  {
    path: 'ads/past/campaign/:campaignId',
    children: <PastYoutuber />,
  },
  {
    path: 'secession',
    children: <Secession />,
  },
  {
    path: 'me/pwchange',
    children: <PwChange />,
  },
  {
    path: 'me/profile',
    children: <Profile />,
  },
];
