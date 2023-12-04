import { application } from '..';

export const enrollWaiting = async (data) => {
  return await application.post('', data).then((res) => res.data);
};

export const getApplicationStatus = async (advertisementId) => {
  return await application.get(`/${advertisementId}`).then(({ data }) => data);
};

export const changeApplicationStatus = async (advertisementId, data) => {
  return await application.patch(`/${advertisementId}`, data).then((res) => res.data);
};
