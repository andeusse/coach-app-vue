<template>
  <section>
    <base-spinner v-if="isLoading"></base-spinner>
    <base-message v-else-if="!!error" :text="error" :type="'error'"></base-message>
    <base-card v-else>
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
  data() {
    return {
      isLoading: false as boolean,
      error: '' as string,
    };
  },
  methods: {
    saveCoach(coach: ICoach) {
      this.isLoading = true;
      addCoach(coach)
        .then(() => {
          useCoachesStore().addCoach(useCoachesStore(), coach);
          this.isLoading = false;
          this.error = '';
        })
        .catch((error) => {
          this.isLoading = false;
          this.error = error.message;
        });
    },
  },
};
</script>

<style></style>
