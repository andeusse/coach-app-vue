<template>
  <section>
    <section>
      <coach-filter @filter-changed="filterChanged"></coach-filter>
    </section>
    <base-card>
      <div class="controls">
        <base-button mode="outline" @click="loadCoaches">Refresh</base-button>
        <base-button link to="/register">Register as a Coach</base-button>
      </div>
      <base-spinner v-if="isLoading"></base-spinner>
      <ul v-else-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach"></coach-item>
      </ul>
      <base-message v-else-if="!!error" :text="error" :type="'error'"></base-message>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import type IFilters from '../types/IFilters';
import CoachFilter from '../components/CoachFilter.vue';
import CoachItem from '../components/CoachItem.vue';

import { useCoachesStore } from '../stores/coaches/index';
import BaseMessage from '../components/ui/BaseMessage.vue';

export default {
  components: {
    CoachItem,
    CoachFilter,
    BaseMessage,
  },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      } as IFilters,
      isLoading: false as boolean,
      error: '' as string,
    };
  },
  computed: {
    filteredCoaches() {
      const coaches = useCoachesStore().getCoaches;
      const filteredCoaches = coaches.filter((coach) => {
        if (this.filters.frontend && coach.areas.includes('frontend')) {
          return coach;
        }
        if (this.filters.backend && coach.areas.includes('backend')) {
          return coach;
        }
        if (this.filters.career && coach.areas.includes('career')) {
          return coach;
        }
      });
      return filteredCoaches;
    },
    hasCoaches() {
      const store = useCoachesStore();
      return store.hasCoaches && !this.isLoading;
    },
  },
  methods: {
    filterChanged(filters: IFilters) {
      this.filters = filters;
    },
    loadCoaches() {
      this.isLoading = true;
      useCoachesStore()
        .loadCoaches(useCoachesStore())
        .then(() => {
          this.error = '';
          this.isLoading = false;
        })
        .catch((error) => {
          this.error = error.message;
          this.isLoading = false;
        });
    },
  },
  created() {
    this.loadCoaches();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>
