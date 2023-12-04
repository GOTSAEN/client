import { bookmarks } from '..';

export const getBookmarkStatus = async (id) => {
  return await bookmarks.get(`${id}`).then((res) => res.data);
};

export const changeBookmarkStatus = async (data) => {
  return bookmarks.post('', data).then(({ data }) => data);
};

export const getBookmarks = async (page) => {
  return bookmarks.get(`?page=${page}&size=20`).then((res) => res.data.data);
};
