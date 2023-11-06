import { authYoutubers, youtubers } from '..'
import { ErrorResponse } from '../response'

export const getYoutuber = () => {
  return authYoutubers
    .get('/me')
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e))
}

export const getAllYoutuberList = (page) => {
  youtubers
    .get(`/all?page=${page}&size=40`)
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e))
}
