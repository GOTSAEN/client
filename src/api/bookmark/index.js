import { bookmarks } from '..';
import { ErrorResponse } from '../response';
import { getYoutuber } from '../youtuber';

export const getBookmarkStatus = async (id) => {
  return await bookmarks
    .get(`${id}`)
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e));
};

export const changeBookmarkStatus = async (data) => {
  return bookmarks
    .post('', data)
    .then(({ data }) => data)
    .catch((e) => ErrorResponse(e));
};
