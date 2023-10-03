<template>
  <span class="badge" :class="type">
    {{ textToUpperCase }}
  </span>
</template>

<script lang="ts">
export default {
  props: {
    text: { type: String, required: true, default: '' },
    type: { type: String, required: false, default: 'frontend' },
  },
  computed: {
    textToUpperCase() {
      return this.text !== undefined ? this.text.toLocaleUpperCase() : '';
    },
  },
};
</script>

<style scoped>
.badge {
  background-color: #ccc;
  color: #252525;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  display: inline-block;
  margin-right: 0.5rem;
  font-size: 12px;
}

.frontend {
  background-color: #3d008d;
  color: white;
}

.backend {
  background-color: #71008d;
  color: white;
}

.career {
  background-color: #8d006e;
  color: white;
}
</style>
