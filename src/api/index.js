import axios, { AxiosInstance } from 'axios';
import { setInterceptors } from './interceptors';
axios.defaults.withCredentials = true;

function createInstance(url, needConfigOption) {
  const instance = axios.create({
    baseURL: `/api/${url}`,
  });
  return setInterceptors(instance, needConfigOption);
}

export const instance = createInstance('');
export const categories = createInstance('categories');
export const search = createInstance('search');
export const authAds = createInstance('advertisement', true);
export const ads = createInstance('advertisement');
export const auth = createInstance('auth');
export const members = createInstance('members');
export const authMembers = createInstance('members', true);
export const youtubers = createInstance('youtubers');
export const authYoutubers = createInstance('youtubers', true);
export const partnerAds = createInstance('members/advertisement', true);
export const application = createInstance('applications', true);
export const bookmarks = createInstance('bookmarks', true);
