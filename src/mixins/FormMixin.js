import { validateUsername } from '@/utils/validation';
export default {
  computed: {
    isUsernameValid() {
      return validateUsername(this.username);
    },
  },
  methods: {
    initForm() {
      this.username = '';
      this.password = '';
      if (this.nickname) {
        this.nickname = '';
      }
    },
  },
};
