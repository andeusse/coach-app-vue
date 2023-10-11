<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form @save-coach="saveCoach"></coach-form>
    </base-card>
  </section>
</template>

<script lang="ts">
import CoachForm from '../components/CoachForm.vue';
import BaseCard from '../components/ui/BaseCard.vue';
import { useCoachesStore } from '../stores/coaches';
import type ICoach from '../types/ICoach';

export default {
  components: { CoachForm, BaseCard },
  methods: {
    saveCoach(coach: ICoach) {
      useCoachesStore().addCoach(useCoachesStore(), coach);
    },
  },
};
</script>

<style></style>
