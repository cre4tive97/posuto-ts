import { validateUsername } from "@/utils/validation";
export default {
  computed: {
    isUsernameValid(): boolean {
      return validateUsername(this.username);
    },
  },
  methods: {
    initForm(): void {
      this.username = "";
      this.password = "";
      if (this.nickname) {
        this.nickname = "";
      }
    },
  },
};
