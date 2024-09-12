import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    userRole: null,
  },
  mutations: {
    setAuthentication(state, status) {
      state.isAuthenticated = status;
    },
    setUserRole(state, role) {
      state.userRole = role;
    },
  },
  actions: {
    login({ commit }, { role }) {
      commit('setAuthentication', true);
      commit('setUserRole', role);
    },
    logout({ commit }) {
      commit('setAuthentication', false);
      commit('setUserRole', null);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userRole: (state) => state.userRole,
  },
});
