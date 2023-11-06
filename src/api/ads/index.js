import { ads, authAds } from '..'
import { ApiResponse, ErrorResponse } from '../response'

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
  return authAds
    .post('', data)
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e))
}

export const updateAds = (id, data) => {
  return authAds
    .patch(`/${id}`, data)
    .then((res) => {
      ApiResponse(res)
    })
    .catch((e) => ErrorResponse(e))
}

export const deleteAds = (id) => {
  return authAds
    .delete(`/${id}`)
    .then((res) => {
      if (res.status === 204) return true
      else new Response('Error', { status: 500 })
    })
    .catch(() => new Response('Error', { status: 500 }))
}

export const fetchAdsById = async (id) => {
  const data = await ads
    .get(`/${id}`)
    .then((res) => res.data)
    .catch((e) => console.log(e))
  return data
}

export const postImage = (id, data) => {
  authAds.post(`/upload/${id}`, data)
}
