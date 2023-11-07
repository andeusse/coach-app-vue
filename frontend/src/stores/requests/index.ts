import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

export const useRequestsStore = defineStore('requests', {
  state: () => ({
    requests: [],
  }),
  getters: getters,
  actions: actions,
});
