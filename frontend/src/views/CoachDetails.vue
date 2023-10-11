<template>
  <section>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ coach?.hourlyRate }} / hour</h3>
        <h3></h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge v-for="area in coach?.areas" :key="area" :type="area" :text="area"></base-badge>
        <p>{{ coach?.description }}</p>
      </base-card>
    </section>
  </section>
</template>

<script lang="ts">
import { useCoachesStore } from '../stores/coaches/index';

export default {
  props: {
    id: { type: String, required: true },
  },
  computed: {
    fullName() {
      return `${this.coach?.firstName} ${this.coach?.lastName}`;
    },
    coach() {
      const store = useCoachesStore();
      return store.getCoaches.find((coach) => coach.id === this.id);
    },
  },
};
</script>

<style></style>
