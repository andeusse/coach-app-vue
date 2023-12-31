import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

export const useCoachesStore = defineStore('coaches', {
  state: () => ({
    coaches: [],
  }),
  getters: getters,
  actions: actions,
});
