import { bookmarks } from '..';
import { ErrorResponse } from '../response';
import { getYoutuber } from '../youtuber';

export const getBookmarkStatus = async (id) => {
  return await bookmarks
    .get(`${id}`)
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e));
};

export const toggleBookmarkStatus = async (data) => {
  return await getYoutuber().then((res) => {
    bookmarks
      .post('', { ...data, memberId: res.youtuberId })
      .then((res) => res.data)
      .catch((e) => ErrorResponse(e));
  });
};
