import { application } from '..'
import { ErrorResponse } from '../response'
import { getYoutuber } from '../youtuber'

export const enrollWaiting = async (advertisementId) => {
  const data = {
    advertisementId,
  }
  await getYoutuber().then(async (res) => {
    const data = {
      memberId: parseInt(res.youtubeMemberId),
      advertisementId,
    }
    return await application
      .post('', data)
      .catch((e) => ErrorResponse(e))
  })
}
