<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <base-message
        v-if="!hasRequests"
        text="You have no requests yet"
        type="information"
      ></base-message>
      <ul v-else>
        <coach-request-item
          v-for="request in receivedRequests"
          :request="request"
          :key="request.id"
        ></coach-request-item>
      </ul>
    </base-card>
  </section>
</template>

<script lang="ts">
import { useRequestsStore } from '@/stores/requests';
import BaseMessage from '../components/ui/BaseMessage.vue';
import CoachRequestItem from '../components/CoachRequestItem.vue';

export default {
  components: { BaseMessage, CoachRequestItem },
  computed: {
    hasRequests() {
      const hasRequests = useRequestsStore().hasRequests;
      return hasRequests === undefined ? false : hasRequests;
    },
    receivedRequests() {
      return useRequestsStore().getRequests;
    },
  },
};
</script>

<style scoped>
header {
  text-align: center;
}

ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}

h3 {
  text-align: center;
}
</style>
