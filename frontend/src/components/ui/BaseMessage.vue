<template>
  <p class="common" :class="type">{{ text }}</p>
</template>

<script lang="ts">
import MessageTypes from '@/types/MessageTypes';

export default {
  props: {
    text: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: MessageTypes.Success,
    },
  },
};
</script>

<style scoped>
.common {
  border-radius: 20px;
  padding: 10px;
  text-align: center;
}
.error {
  background-color: rgba(255, 0, 0, 0.65);
  border: 2px solid rgb(255, 0, 0);
  color: white;
}
.warning {
  background-color: rgba(250, 204, 0, 0.65);
  border: 2px solid rgb(250, 204, 0);
  color: black;
}
.success {
  background-color: rgba(50, 205, 50, 0.65);
  border: 2px solid rgb(50, 205, 50);
  color: white;
}
.information {
  background-color: rgba(0, 191, 255, 0.65);
  border: 2px solid rgb(0, 191, 255);
  color: black;
}
</style>
