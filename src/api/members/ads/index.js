import { partnerAds } from '@/api'
import { ErrorResponse } from '@/api/response'

export const fetchPartnerAds = async (page, status) => {
  return await partnerAds
    .get(`?page=${page}&size=20&status=${status}`)
    .then((res) => res)
    .catch(ErrorResponse)
}
