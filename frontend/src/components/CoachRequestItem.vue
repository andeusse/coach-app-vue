<template>
  <li>
    <div>
      <a :href="emailLink">User email: {{ request.email }}</a>
    </div>
    <p rows="5" v-text="request.message"></p>
  </li>
</template>

<script lang="ts">
import { type PropType } from 'vue';
import type IMessage from '../types/IMessage';

export default {
  props: { request: { type: Object as PropType<IMessage>, required: true } },
  computed: {
    emailLink() {
      return `mailto: ${this.request.email}`;
    },
  },
};
</script>

<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #ccc;
  padding: 1rem;
}

a {
  color: #3d008d;
  text-decoration: none;
  font-weight: bold;
}

a:hover,
a:active {
  color: #8d007a;
}

p {
  margin: 0.5rem 0 0 0;
}
</style>
