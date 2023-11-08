import { getCoaches } from '@/api/coach';
import type ICoach from '@/types/ICoach';
import type ICoachState from '@/types/ICoachState';

const actions = {
  addCoach(state: ICoachState, payload: ICoach) {
    state.coaches.push(payload);
  },
  setCoaches(state: ICoachState, payload: ICoach[]) {
    state.coaches = payload;
  },
  async loadCoaches(state: ICoachState) {
    const response: any = await getCoaches();

    if (response.ok) {
      throw new Error(response.message || 'Failed to fetch coaches, try again!');
    }

    const data: any = response.data;
    const coaches: ICoach[] = [];
    for (const key in data) {
      coaches.push(data[key]);
    }
    this.setCoaches(state, coaches);
  },
};

export default actions;
