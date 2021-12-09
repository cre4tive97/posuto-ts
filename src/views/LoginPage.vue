<template>
  <div class="page">
    <div class="form__container">
      <p class="form__title">Login</p>
      <LoginForm />
    </div>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: {
    LoginForm,
  },
};
</script>

<style scoped></style>
