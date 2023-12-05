import axios, { AxiosInstance } from 'axios';
import { setInterceptors } from './interceptors';
axios.defaults.withCredentials = true;

function createInstance(url) {
  const instance = axios.create({
    baseURL: `/api/${url}`,
  });
  return setInterceptors(instance);
}

export const instance = createInstance('');
export const categories = createInstance('categories');
export const search = createInstance('search');
export const authAds = createInstance('advertisement');
export const ads = createInstance('advertisement');
export const auth = createInstance('auth');
export const members = createInstance('members');
export const authMembers = createInstance('members');
export const youtubers = createInstance('youtubers');
export const authYoutubers = createInstance('youtubers');
export const partnerAds = createInstance('members/advertisement');
export const application = createInstance('applications');
export const bookmarks = createInstance('bookmarks');
