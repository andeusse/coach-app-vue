<template>
  <section>
    <base-card>
      <h2>Register as a coach now!</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script lang="ts">
import CoachForm from '../components/CoachForm.vue';
import BaseCard from '../components/ui/BaseCard.vue';
export default {
  components: { CoachForm, BaseCard },
};
</script>

<style></style>
