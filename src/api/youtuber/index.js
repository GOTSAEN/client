import { authYoutubers } from '..'
import { ErrorResponse } from '../response'

export const getYoutuber = () => {
  return authYoutubers
    .get('/me')
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e))
}
