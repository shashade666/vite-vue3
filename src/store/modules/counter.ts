import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 1,
  }),
  getters: {
    gettersCount() {
      return this.count;
    },
  },
  actions: {
    accumulate() {
      this.count++;
    },
  },
});
