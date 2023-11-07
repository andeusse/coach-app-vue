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
      <ul v-if="hasCoaches">
        <coach-item v-for="coach in filteredCoaches" :key="coach.id" :coach="coach"></coach-item>
      </ul>
      <h3 v-else>No coaches found</h3>
    </base-card>
  </section>
</template>

<script lang="ts">
import type IFilters from '../types/IFilters';
import CoachFilter from '../components/CoachFilter.vue';
import CoachItem from '../components/CoachItem.vue';

import { useCoachesStore } from '../stores/coaches/index';

export default {
  components: {
    CoachItem,
    CoachFilter,
  },
  data() {
    return {
      filters: {
        frontend: true,
        backend: true,
        career: true,
      } as IFilters,
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
      return store.hasCoaches;
    },
  },
  methods: {
    filterChanged(filters: IFilters) {
      this.filters = filters;
    },
    loadCoaches() {
      useCoachesStore().loadCoaches(useCoachesStore());
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
