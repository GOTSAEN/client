import { ads, authAds } from '..'

export const fetchAds = async () => {
  return await ads
    .get('/allAd')
    .then((res) => res.data.data)
    .catch((e) => console.log(e))
}

export const fetchAdsByCategory = async (category) => {
  return ads
    .get(`/byCategory?category=${category}`)
    .then((res) => res.data.data)
    .catch((e) => console.log(e))
}

export const newAds = (data) => {
  console.log('newAds')
  return authAds
    .post('', data)
    .then((res) => {
      console.log(res)
      if (res.status === 200) return true
      else new Response('Error', { status: 500 })
    })
    .catch(() => new Response('Error', { status: 500 }))
}

export const fetchAdsById = async (id) => {
  const data = await authAds
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
  return data
}
