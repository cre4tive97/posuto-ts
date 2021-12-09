<template>
  <div class="page">
    <div class="form__container">
      <p class="form__title">Sign Up</p>
      <SignupForm />
    </div>
  </div>
</template>

<script>
import SignupForm from '@/components/SignupForm.vue';
export default {
  components: {
    SignupForm,
  },
};
</script>

<style scoped></style>
