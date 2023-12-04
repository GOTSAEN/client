import { partnerAds } from '@/api';

export const fetchPartnerAds = async (page, status) => {
  return await partnerAds.get(`?page=${page}&size=20&status=${status}`).then((res) => res.data.data);
};

export const fetchPartnerAdsYoutuber = async (page, id) => {
  return await partnerAds.get(`/${id}?page=${page}&size=20`).then((res) => res.data.data);
};
