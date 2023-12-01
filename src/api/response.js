import { deleteUserSession } from '@/service/login-auth';
import { toast } from 'react-toastify';

export function ApiResponse(response) {
  const status = response.status;

  switch (status) {
    case 200:
    case 201:
      return response;
  }
}

export function ErrorResponse(error) {
  return error;
  // const error = response.data;
  // console.log(error);
  // const { status, message } = error;

  // switch (status) {
  //   case 500:
  //     deleteUserSession();
  //     window.location.href = '/login';
  //   case 400:
  //   // if (Boolean(filedError)) {
  //   //   console.log('400 걸림');
  //   //   return Error(`${filedError}에 입력 규칙 문제가 있습니다`);
  //   // }
  //   case 401:
  //     return message;

  //   default:
  //     toast.error(message);
  // }
}
