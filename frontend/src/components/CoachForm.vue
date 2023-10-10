<template>
  <form @submit.prevent="submitForm">
    <div class="form-control">
      <label for="firsname">Firsname</label>
      <input type="text" id="firstname" v-model.trim="firstName" />
    </div>
    <div class="form-control">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="lastName" />
    </div>
    <div class="form-control">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="description"></textarea>
    </div>
    <div class="form-control">
      <label for="hourlyrate">Hourly Rate</label>
      <input type="number" id="hourlyrate" v-model.number="hourlyRate" />
    </div>
    <div class="form-control">
      <h3>Areas of expertise</h3>
      <div class="filter-option">
        <input type="checkbox" id="frontend" @change="updateAreas" />
        <label for="frontend">Frontend</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="backend" @change="updateAreas" />
        <label for="backend">Backend</label>
      </div>
      <div class="filter-option">
        <input type="checkbox" id="career" @change="updateAreas" />
        <label for="career">Career</label>
      </div>
    </div>
    <base-button>Register</base-button>
  </form>
</template>

<script lang="ts">
import BaseButton from './ui/BaseButton.vue';
import type ICoach from '../types/ICoach';
export default {
  components: { BaseButton },
  data() {
    return {
      id: this.$uuid.v4(),
      firstName: '',
      lastName: '',
      areas: [],
      description: '',
      hourlyRate: 10,
    } as ICoach;
  },
  methods: {
    updateAreas(event: Event) {
      if (event.target) {
        const target = event.target as HTMLInputElement;
        const id = target.id;
        const checked = target.checked;
        if (checked) {
          this.areas.push(id);
        } else {
          this.areas = this.areas.filter((area: string) => area !== id);
        }
      }
    },
    submitForm() {
      console.log(this.$data as ICoach);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
