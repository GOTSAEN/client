import { auth } from '..';
import { ApiResponse, ErrorResponse } from '../response';

export const signIn = (data) => {
  return auth
    .post('/login', data)
    .then((res) => ApiResponse(res))
    .catch((e) => ErrorResponse(e));
};
