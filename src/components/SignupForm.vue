<template>
  <form class="form" @submit.prevent="submitForm">
    <div class="form-box">
      <label for="username">Username</label>
      <input
        class="input"
        id="username"
        type="text"
        v-model="username"
        autocomplete="username"
      />
      <p
        style="color: red; position: relative"
        v-if="!isUsernameValid && username !== ''"
      >
        이메일을 입력해주세요.
      </p>
    </div>
    <div class="form-box">
      <label for="password">Password</label>
      <input
        class="input"
        id="password"
        type="password"
        v-model="password"
        autocomplete="current-password"
      />
    </div>
    <div class="form-box">
      <label for="nickname">Nickname</label>
      <input
        class="input"
        id="nickname"
        type="text"
        v-model="nickname"
        autocomplete="nickname"
      />
    </div>
    <button
      class="btn"
      :disabled="!isUsernameValid || !username || !password || !nickname"
    >
      Sign up
    </button>
    <transition name="modalAnimation">
      <SignupModal v-if="signupSuccess" :nickname="registerdNickname" />
    </transition>
  </form>
</template>

<script>
import { registerUser } from '@/api/auth';
import SignupModal from '@/components/SignupModal.vue';
import FormMixin from '@/mixins/FormMixin';
export default {
  name: 'SignUpForm',
  components: {
    SignupModal,
  },
  data() {
    return {
      //form data
      username: '',
      password: '',
      nickname: '',
      // modal
      registerdNickname: '',
      signupSuccess: false,
    };
  },
  mixins: [FormMixin],
  methods: {
    // 폼 제출할시 폼 데이터를 서버로 post 요청후, 모달창을 보여줌
    async submitForm() {
      try {
        const { data } = await registerUser({
          username: this.username,
          password: this.password,
          nickname: this.nickname,
        });
        this.showSignupModal(data);
      } catch (error) {
        if (error.response.status === 409) {
          alert('이미 사용중인 Username 입니다!');
        }
      } finally {
        this.initForm();
      }
    },

    showSignupModal(data) {
      this.registerdNickname = data.nickname;
      this.signupSuccess = true;
    },
  },
};
</script>

<style scoped>
.modalAnimation-enter {
  opacity: 0;
}
.modalAnimation-enter-active {
  transition: opacity 0.5s;
}
</style>
