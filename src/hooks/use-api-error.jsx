import { useCallback } from 'react';
import { toast } from 'react-toastify';

const useApiError = () => {
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
