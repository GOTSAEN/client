import { auth } from '..';
import { ErrorResponse } from '../response';
import { Cookies } from 'react-cookie';

export const signIn = (data, email) => {
  const cookies = new Cookies();
  return auth
    .post('/login', data)
    .then(({ headers }) => {
      const { authorization, refresh, usertype } = headers;
      const authInfo = { authorization, refresh, usertype, email };

      return authInfo;
    })
    .catch((e) => ErrorResponse(e));
};
