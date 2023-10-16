import { ads, authAds } from '..'

export const fetchAds = async () => {
  const data = await ads
    .get('/allAd')
    .then((res) => res.data.data)
    .catch((e) => console.log(e))
  return data
}

export const newAds = (data) => {
  return authAds
    .post('', data)
    .then((res) => res.status)
    .catch(() => new Response('Error', { status: 500 }))
}

export const fetchAdsById = async (id) => {
  const data = await authAds
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
  return data
}
