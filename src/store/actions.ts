import { saveAuthToCookie, saveUserToCookie } from "@/utils/cookies.js";
import { ActionContext } from "vuex";
import { loginUser } from "@/api/auth";
import { Mutations, MutationsType } from "./mutations";
import { RootState } from "./state";

export enum ActionTypes {
  LOGIN_USER = "LOGIN_USER",
  GET_POSTCOLOR = "GET_POSTCOLOR",
}

type NewActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload?: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<RootState, RootState>, "commit">;

export const actions = {
  async [ActionTypes.LOGIN_USER](context: NewActionContext, userData: any) {
    const response = await loginUser(userData);
    context.commit(MutationsType.setUserToken, response.data.token);
    context.commit(MutationsType.setUserNickname, response.data.user.nickname);
    saveAuthToCookie(response.data.token);
    saveUserToCookie(response.data.user.nickname);
    return response.data;
  },
  [ActionTypes.GET_POSTCOLOR](context: NewActionContext): void {
    const color = localStorage.getItem("post_color");
    if (typeof color === "string")
      context.commit(MutationsType.setPostColor, color);
  },
};

export type Actions = typeof actions;
