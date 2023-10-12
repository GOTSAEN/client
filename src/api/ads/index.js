import { ads } from '..'

export const fetchAds = () => {
  const data = ads
    .get('')
    .then((res) => res.data)
    .catch((e) => console.log(e))
  return data
}

export const newAds = (data) => {
  return ads
    .post('', data)
    .then((res) => res.status)
    .catch(() => new Response('Error', { status: 500 }))
}

export const fetchAdsById = (id) => {
  const data = ads
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
  return data
}
