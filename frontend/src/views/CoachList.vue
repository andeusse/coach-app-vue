<template>
  <section>
    <h2>Coach List</h2>
    <section>FILTER</section>
    <base-card>
      <div class="controls">
        <base-button mode="outline">Refresh</base-button>
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
import CoachItem from '../components/CoachItem.vue';
import BaseButton from '../components/ui/BaseButton.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import { useCoachesStore } from '../stores/coaches/index';

export default {
  components: {
    CoachItem,
    BaseCard,
    BaseButton,
  },
  computed: {
    filteredCoaches() {
      const store = useCoachesStore();
      return store.getCoaches;
    },
    hasCoaches() {
      const store = useCoachesStore();
      return store.hasCoaches;
    },
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
