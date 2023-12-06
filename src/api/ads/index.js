import { ads, authAds } from '..';

export const fetchAds = async () => {
  return await ads.get('/allAd').then((res) => res.data.data);
};

export const fetchAdsByStatus = async (status, page) => {
  return await ads.get(`/byStatus?status=${status}&page=${page}&size=20`).then((res) => res.data.data);
};

export const fetchAdsByFilter = async (filter, page) => {
  return await ads.get(`/${filter}?page=${page}&size=20`).then((res) => res.data.data);
};

export const fetchAdsByCategory = async (category) => {
  return ads.get(`/byCategory?category=${category}`).then((res) => res.data);
};

export const newAds = async (data) => {
  return await authAds.post('', data).then((res) => res.data);
};

export const updateAds = async (id, data) => {
  return await authAds.patch(`/${id}`, data).then(() => id);
};

export const deleteAds = async (id) => {
  return await authAds.delete(`/${id}`).then((res) => {
    if (res.status === 204) return true;
  });
};

export const fetchAdsById = async (id) => {
  const data = await ads.get(`/${id}`).then((res) => res.data);
  return data;
};

export const postImage = async (id, data) => {
  await authAds.post(`/upload/${id}`, data);
};

export const toProgressAd = async (id) => {
  return await authAds.patch(`/${id}/progressAd`).then((res) => res);
};

export const toFinishAd = async (id) => {
  return await authAds.patch(`/${id}/finishAd`).then((res) => res.status);
};
