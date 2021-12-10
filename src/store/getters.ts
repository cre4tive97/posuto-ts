import { RootState } from "./state";

export const getters = {
  isLogin(state: RootState): boolean {
    return state.nickname !== "";
  },
};

export type Getters = typeof getters;
