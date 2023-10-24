import { search } from '../index'

export const fetchByKeyword = async (keyword) => {
  return await search
    .get(`advertisement?keyword=${keyword}`)
    .then((res) => res.data)
}
