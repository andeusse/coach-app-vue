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
import { addCoach } from '../api/coach';

export default {
  components: { CoachForm, BaseCard },
  methods: {
    saveCoach(coach: ICoach) {
      addCoach(coach)
        .then((data) => {
          useCoachesStore().addCoach(useCoachesStore(), coach);
        })
        .catch((error) => {
          // Show error
        })
        .finally(() => {
          // Set loading false
        });
    },
  },
};
</script>

<style></style>
