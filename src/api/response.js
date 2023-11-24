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
  const status = error.response.status;
  const message = error.response.data.message;
  switch (status) {
    case 500:
      deleteUserSession();
      window.location.href = '/login';
    default:
      toast.error(message);
  }
}
