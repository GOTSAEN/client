import { auth } from '..';

export const signIn = (data, email) => {
  return auth.post('/login', data).then(({ headers }) => {
    const { authorization, refresh, usertype } = headers;
    const authInfo = { authorization, refresh, usertype, email };

    return authInfo;
  });
};
