import { search } from '../index'

export const fetchByKeyword = async (keyword) => {
  return await get
    .get(`?advertisement=${keyword}`)
    .then((res) => res.data)
}
