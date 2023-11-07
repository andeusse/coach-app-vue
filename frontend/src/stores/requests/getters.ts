import type IMessage from '@/types/IMessage';
import type IRequestState from '@/types/IRequestState';

const getters = {
  getRequests(state: IRequestState): IMessage[] {
    return state.requests;
  },
  hasRequests(state: IRequestState): boolean {
    return state.requests && state.requests.length > 0;
  },
};

export default getters;
