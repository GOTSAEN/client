import { ads } from '..'

export const getAllAds = (page) => {
  return ads
    .get(`/allAds?page=${page}&size={20}`)
    .then((res) => {
      console.log(res.data)
    })
}
