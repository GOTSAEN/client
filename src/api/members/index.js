import { members, authMembers } from '..';

export const newMember = (data) => {
  return members.post('', data).then((res) => res);
};

export const getMember = () => {
  return authMembers.get('').then((res) => res.data);
};

export const updateMember = (data) => {
  return authMembers.patch('', data).then((res) => res);
};

export const editPassword = (data) => {
  return authMembers
    .patch('/password', data)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};
