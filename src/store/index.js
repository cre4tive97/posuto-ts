import Vue from 'vue';
import Vuex from 'vuex';
import { loginUser } from '@/api/auth';
import {
  saveAuthToCookie,
  saveUserToCookie,
  getAuthFromCookie,
  getUserFromCookie,
} from '@/utils/cookies';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    token: getAuthFromCookie() || '',
    nickname: getUserFromCookie() || '',
    postColor: '#FEC0CA',
    postEmptyStatus: false,
  },
  getters: {
    isLogin(state) {
      return state.nickname !== '';
    },
  },
  mutations: {
    setUserToken(state, token) {
      state.token = token;
    },
    setUserNickname(state, nickname) {
      state.nickname = nickname;
    },
    clearToken(state) {
      state.token = '';
    },
    clearNickname(state) {
      state.nickname = '';
    },
    setPostColor(state, color) {
      state.postColor = color;
    },
    setPostEmptyStatus(state, isEmpty) {
      state.postEmptyStatus = isEmpty;
    },
  },
  actions: {
    async LOGIN_USER({ commit }, userData) {
      const { data } = await loginUser(userData);
      commit('setUserToken', data.token);
      commit('setUserNickname', data.user.nickname);
      saveAuthToCookie(data.token);
      saveUserToCookie(data.user.nickname);
    },
    GET_POSTCOLOR({ commit }) {
      const color = localStorage.getItem('post_color');
      commit('setPostColor', color);
    },
  },
});
