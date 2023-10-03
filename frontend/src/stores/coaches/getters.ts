import type ICoach from '@/types/ICoach';
import type ICoachState from '../../types/ICoachState';

const getters = {
  getCoaches(state: ICoachState): ICoach[] {
    return state.coaches;
  },
  hasCoaches(state: ICoachState): boolean {
    return state.coaches && state.coaches.length > 0;
  },
};

export default getters;
