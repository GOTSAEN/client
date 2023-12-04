import { authYoutubers, youtubers } from '..';

export const getYoutuber = async () => {
  return await authYoutubers.get('/me').then((res) => res.data);
};

export const getAllYoutuberList = async (page) => {
  return await youtubers.get(`/all?page=${page}&size=40`).then((res) => res.data.data);
};

export const getYoutuberByCategory = async (page, category) => {
  return await youtubers.get(`/byCategory?category=${category}&page=${page}&size=40`).then((res) => res.data.data);
};
