import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

const useRequestsStore = defineStore('requests', {
  state: () => ({}),
  getters: getters,
  actions: actions,
});

export default useRequestsStore;
