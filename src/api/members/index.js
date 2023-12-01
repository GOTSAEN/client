import { members, authMembers } from '..';
import { ApiResponse, ErrorResponse } from '../response';

export const newMember = (data) => {
  return members
    .post('', data)
    .then((res) => res)
    .catch((e) => e);
};

export const getMember = () => {
  return authMembers.get('').then((res) => res.data);
};

export const updateMember = (data) => {
  return authMembers
    .patch('', data)
    .then((res) => ApiResponse(res))
    .catch((e) => ErrorResponse(e));
};
