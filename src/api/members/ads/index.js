import { partnerAds } from '@/api'
import { ErrorResponse } from '@/api/response'

export const fetchPartnerAds = async (page, status) => {
  console.log('???')
  const data = await partnerAds
    .get(`?page=${page}&size=20&status=${status}`)
    .then((res) => {
      if (res.status === 200) return res
    })
  // .catch((e) => ErrorResponse(e))
  return data
}
