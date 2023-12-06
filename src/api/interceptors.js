import { deleteCookiesWithRootPath } from '@/service/login-auth';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setInterceptors(instance, needConfigOption) {
  // Add a request interceptor
  if (needConfigOption)
    instance.interceptors.request.use(
      function (config) {
        config.headers.Authorization = cookies.get('SESSIONID', { path: '/' });
        config.headers.Refresh = cookies.get('RENEW', { path: '/' });
        return config;
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error);
      }
    );

  // Add a response interceptor
  instance.interceptors.response.use(
    function (response) {
      return response;
    },
    function (error) {
      const { data } = error.response;
      if (data.status === 500) {
        deleteCookiesWithRootPath();
      }
      return Promise.reject(data);
    }
  );
  return instance;
}
