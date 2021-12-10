import { RootState } from "./state";

const getters = {
  isLogin(state: RootState): boolean {
    return state.nickname !== "";
  },
};
