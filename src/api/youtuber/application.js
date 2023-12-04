import { authYoutubers } from '..';

export const getApplication = async (page, status) => {
  return await authYoutubers(`application?page=${page}&size=20&status=${status}`).then((res) => res.data.data);
};
