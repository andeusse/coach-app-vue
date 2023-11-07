import type IMessage from '@/types/IMessage';
import type IRequestState from '@/types/IRequestState';

const actions = {
  addRequest(state: IRequestState, payload: IMessage) {
    state.requests.push(payload);
  },
};

export default actions;
