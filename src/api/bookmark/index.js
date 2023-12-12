import { bookmarks } from '..';

export const getBookmarkStatus = async (id) => {
  return await bookmarks.get(`${id}`).then((res) => res.data);
};

export const changeBookmarkStatus = async (data) => {
  return bookmarks.post('', data).then(({ data }) => data);
};

export const getBookmarks = async (pageParam) => {
  return bookmarks.get(`?page=${pageParam}&size=2`).then((res) => res.data);
};
