<template>
  <form @submit.prevent="submitForm" @keypress="onFormChange" @change="onFormChange">
    <base-message v-if="!isFormValid" text="Fix the errors in the form" type="error"></base-message>
    <div class="form-control" :class="{ invalid: !areFieldsValid.firstName }">
      <label for="firsname">Firsname</label>
      <input type="text" id="firstname" v-model.trim="coach.firstName" />
    </div>
    <div class="form-control" :class="{ invalid: !areFieldsValid.lastName }">
      <label for="lastname">Lastname</label>
      <input type="text" id="lastname" v-model.trim="coach.lastName" />
    </div>
    <div class="form-control" :class="{ invalid: !areFieldsValid.description }">
      <label for="description">Description</label>
      <textarea id="description" rows="5" v-model.trim="coach.description"></textarea>
    </div>
    <div class="form-control" :class="{ invalid: !areFieldsValid.hourlyRate }">
      <label for="hourlyrate">Hourly Rate</label>
      <input type="number" id="hourlyrate" v-model.number="coach.hourlyRate" />
    </div>
    <div class="form-control" :class="{ invalid: !areFieldsValid.areas }">
      <label>Areas of expertise</label>
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
import type ICoach from '../types/ICoach';
export default {
  emits: ['save-coach'],
  data() {
    return {
      coach: {
        id: this.$uuid.v4(),
        firstName: '',
        lastName: '',
        areas: [],
        description: '',
        hourlyRate: 10,
      } as ICoach,
      areFieldsValid: {
        firstName: true,
        lastName: true,
        areas: true,
        description: true,
        hourlyRate: true,
      },
      isFormValid: true as boolean,
    };
  },
  methods: {
    updateAreas(event: Event) {
      if (event.target) {
        const target = event.target as HTMLInputElement;
        const id = target.id;
        const checked = target.checked;
        if (checked) {
          this.coach.areas.push(id);
        } else {
          this.coach.areas = this.coach.areas.filter((area: string) => area !== id);
        }
      }
    },
    onFormChange() {
      this.validateForm();
    },
    validateForm() {
      this.isFormValid = true;
      if (this.coach.firstName === '' || this.coach.firstName.length < 3) {
        this.areFieldsValid.firstName = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.firstName = true;
      }
      if (this.coach.lastName === '' || this.coach.lastName.length < 3) {
        this.areFieldsValid.lastName = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.lastName = true;
      }
      if (this.coach.description === '' || this.coach.description.length < 20) {
        this.areFieldsValid.description = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.description = true;
      }
      if (this.coach.hourlyRate <= 0) {
        this.areFieldsValid.hourlyRate = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.hourlyRate = true;
      }
      if (this.coach.areas.length === 0) {
        this.areFieldsValid.areas = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.areas = true;
      }
    },
    submitForm() {
      this.validateForm();
      if (this.isFormValid) {
        this.$emit('save-coach', this.$data.coach as ICoach);
        this.$router.push('/coaches');
      }
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
