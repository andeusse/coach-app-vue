import { getRequests } from '@/api/request';
import type IMessage from '@/types/IMessage';
import type IRequestState from '@/types/IRequestState';

const actions = {
  addRequest(state: IRequestState, payload: IMessage) {
    state.requests.push(payload);
  },
  setRequests(state: IRequestState, payload: IMessage[]) {
    state.requests = payload;
  },
  async loadRequests(state: IRequestState) {
    const response: any = await getRequests();

    if (response.ok) {
      throw new Error(response.message || 'Failed to fetch requests, try again!');
    }

    const data: any = response.data;
    const requests: IMessage[] = [];
    for (const key in data) {
      requests.push(data[key]);
    }
    this.setRequests(state, requests);
  },
};

export default actions;
