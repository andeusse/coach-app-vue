import { defineStore } from 'pinia';
import getters from './getters';
import actions from './actions';
import { uuid } from 'vue-uuid';

export const useCoachesStore = defineStore('coaches', {
  state: () => ({
    coaches: [
      {
        id: uuid.v4(),
        firstName: 'Maximilian',
        lastName: 'Schwarzmüller',
        areas: ['frontend', 'backend', 'career'],
        description:
          "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
        hourlyRate: 30,
      },
      {
        id: uuid.v4(),
        firstName: 'Julie',
        lastName: 'Jones',
        areas: ['frontend', 'career'],
        description:
          'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
        hourlyRate: 30,
      },
    ],
  }),
  getters: getters,
  actions: actions,
});
