import { validateUsername } from "@/utils/validation";
import Vue from "vue";
export default Vue.extend({
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
});
