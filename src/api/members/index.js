import { members } from '..'

export const newMember = (data) => {
  return members.post('', data).then((res) => res)
}
