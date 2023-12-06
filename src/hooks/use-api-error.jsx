import { useAuth } from '@/context/AuthContext';
import { useCallback } from 'react';
import { isError } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const useApiError = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const handleError = useCallback((Error) => {
    const { status, message } = Error;
    switch (status) {
      // BadRequestException | ValidationError
      case 401:
        toast.error('회원정보가 일치하지 않습니다');
        break;
      default:
        toast.error(message);
        break;
    }
  }, []);
  return { handleError };
};

export default useApiError;
