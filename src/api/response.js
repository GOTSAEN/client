import { deleteUserSession } from '@/service/login-auth';

export function ApiResponse(response) {
  const status = response.status;

  switch (status) {
    case 200:
    case 201:
      return response;
  }
}

export function ErrorResponse(error) {
  const status = error.response.status;
  const message = error.response.data.message;
  console.log(status);
  switch (
    status
    // case 500:
    //   deleteUserSession();
    //   window.location.href = '/login';
    // default:
    //   throw new Error(message);
  ) {
  }
}
