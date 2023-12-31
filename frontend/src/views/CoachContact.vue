<template>
  <form @submit.prevent="submitForm" @keypress="onFormChange" @change="onFormChange">
    <base-spinner v-if="isLoading"></base-spinner>
    <base-message v-else-if="!!error" :text="error" :type="'error'"></base-message>
    <base-message v-if="!isFormValid" text="Fix the errors in the form" type="error"></base-message>
    <div class="form-control" :class="{ invalid: !areFieldsValid.email }">
      <label for="email">Email</label>
      <input type="email" id="email" v-model.trim="message.email" />
    </div>
    <div class="form-control" :class="{ invalid: !areFieldsValid.message }">
      <label for="message">Message</label>
      <textarea name="message" id="message" rows="5" v-model.trim="message.message"></textarea>
    </div>
    <div class="actions">
      <base-button>Send Message</base-button>
    </div>
  </form>
</template>

<script lang="ts">
import type IMessage from '../types/IMessage';
import { useRequestsStore } from '../stores/requests';
import validateEmail from '../utils/ValidateEmail';
import { addRequest } from '../api/request';

export default {
  data() {
    return {
      message: {
        id: this.$uuid.v4(),
        coachId: this.$router.currentRoute.value.params.id,
        email: '',
        message: '',
      },
      areFieldsValid: {
        email: true,
        message: true,
      },
      isFormValid: true,
      isLoading: false as boolean,
      error: '' as string,
    };
  },
  methods: {
    onFormChange() {
      this.validateForm();
    },
    validateForm() {
      this.isFormValid = true;
      if (validateEmail(this.message.email) === null) {
        this.areFieldsValid.email = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.email = true;
      }
      if (this.message.message === '' || this.message.message.length < 20) {
        this.areFieldsValid.message = false;
        this.isFormValid = false;
      } else {
        this.areFieldsValid.message = true;
      }
    },
    submitForm() {
      this.validateForm();
      if (this.isFormValid) {
        this.isLoading = true;
        const data = this.$data.message as IMessage;
        addRequest(data)
          .then(() => {
            useRequestsStore().addRequest(useRequestsStore(), this.$data.message as IMessage);
            this.$router.push('/coaches');
            this.error = '';
            this.isLoading = false;
          })
          .catch((error) => {
            this.error = error.message;
            this.isLoading = false;
          });
      }
    },
  },
};
</script>

<style scoped>
form {
  margin: 1rem;
  border: 1px solid #ccc;
  border-radius: 12px;
  padding: 1rem;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  display: block;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  border: 1px solid #ccc;
  padding: 0.15rem;
}

input:focus,
textarea:focus {
  border-color: #3d008d;
  background-color: #faf6ff;
  outline: none;
}

.invalid label {
  color: red;
}
.invalid input,
.invalid textarea {
  border: 1px solid red;
}

.actions {
  text-align: center;
}
</style>
