import type IMessage from '@/types/IMessage';
import api from './api';

export const getRequests = () => {
  return api.get('/requests.json');
};

export const addRequest = (request: IMessage) => {
  return api.put(`/requests/${request.id}.json`, { ...request });
};
