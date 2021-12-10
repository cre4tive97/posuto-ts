import {
    saveAuthToCookie,
    saveUserToCookie,
  } from "@/utils/cookies.js";
import { loginUser } from "@/api/auth";

const actions: {
    async LOGIN_USER({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit("setUserToken", data.token);
      commit("setUserNickname", data.user.nickname);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.nickname);
    },
    GET_POSTCOLOR({ commit }) {
      const color = localStorage.getItem("post_color");
      commit("setPostColor", color);
    },
  },