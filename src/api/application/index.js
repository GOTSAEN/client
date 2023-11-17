import { application } from '..';
import { ErrorResponse } from '../response';

export const enrollWaiting = async (data) => {
  return await application
    .post('', data)
    .then((res) => res.data)
    .catch((e) => ErrorResponse(e));
};

export const getApplicationStatus = async (advertisementId) => {
  return await application
    .get(`/${advertisementId}`)
    .then(({ data }) => data)
    .catch(ErrorResponse);
};

export const changeApplicationStatus = async (applicationId, data) => {
  return await application(`/${applicationId}`, data)
    .then((res) => res.data)
    .catch(ErrorResponse);
};
