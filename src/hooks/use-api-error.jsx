import { useCallback } from 'react';

const useApiError = () => {
  const handleError = useCallback((axiosError) => {
    const httpsStatus = error.status;
    const response = error.response;
    console.log(httpsStatus, response);
    const errorResponse = axiosError.response?.data;
    const error = errorResponse.error;
    const status = error.statusCode;

    // switch (status) {
    //   // BadRequestException | ValidationError
    //   case 400:
    //     if (isValidationError(error)) {
    //       console.log(error.validationErrorInfo);
    //     } else {
    //       openErrorModal(error);
    //     }
    //     break;
    //   // 과도한 요청을 보낼 시
    //   case 429:
    //     openErrorModal(error);
    //     break;
    //   // 문자메시지 발송 실패
    //   case 500:
    //     defaultHandler(error);
    //     break;
    //   default:
    //     defaultHandler(error);
    //     break;
    // }
  }, []);
  return { handleError };
};

export default useApiError;
