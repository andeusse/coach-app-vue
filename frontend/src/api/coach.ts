import type ICoach from '@/types/ICoach';
import api from './api';

export const getCoaches = () => {
  return api.get('/coaches.json');
};

export const addCoach = (coach: ICoach) => {
  return api.put(`/coaches/${coach.id}.json`, { ...coach });
};
