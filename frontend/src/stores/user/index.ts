import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: String,
    isLoading: Boolean,
  }),
  getters: getters,
  actions: actions,
});
