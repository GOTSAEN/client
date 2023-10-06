import { members, authMembers } from '..'
import { ApiResponse, ErrorResponse } from '../response'

export const newMember = (data) => {
  return members
    .post('', data)
    .then((res) => ApiResponse(res))
    .catch((e) => ErrorResponse(e))
}

export const getMember = () => {
  console.log(authMembers)
  return authMembers.get('').then((res) => res.data)
}
