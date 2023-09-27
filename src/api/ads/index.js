import { ads } from '..'

export const fetchAds = () => {
  const data = ads
    .get('')
    .then((res) => res.data)
    .catch((e) => console.log(e))
  return data
}

export const newAds = (data) => {
  console.log(data)
  return ads
    .post('', { requestBody: data })
    .then((res) => console.log(res))
}
