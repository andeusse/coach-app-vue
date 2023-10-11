import type ICoach from '@/types/ICoach';
import type ICoachState from '@/types/ICoachState';

const actions = {
  addCoach(state: ICoachState, payload: ICoach) {
    state.coaches.push(payload);
  },
};

export default actions;
