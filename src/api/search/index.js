import { search } from '../index'

export const fetchByKeyword = async (keyword, page) => {
  return await search
    .get(
      `advertisement?keyword=${keyword}&page=${page}&size=30`
    )
    .then((res) => res.data)
}
