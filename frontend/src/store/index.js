import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')) || false,
    userRole: localStorage.getItem('userRole') || null,
  },
  mutations: {
    setAuthentication(state, status) {
      console.log('Mutation - Set Authentication:', status);
      state.isAuthenticated = status;
      localStorage.setItem('isAuthenticated', JSON.stringify(status));
    },
    setUserRole(state, role) {
      console.log('Mutation - Set User Role:', role);
      state.userRole = role;
      localStorage.setItem('userRole', role);
    },
  },
  actions: {
    login({ commit }, { role }) {
      console.log('Action - Login Role:', role);
      commit('setAuthentication', true);
      commit('setUserRole', role);
    },
    logout({ commit }) {
      console.log('Action - Logout');
      commit('setAuthentication', false);
      commit('setUserRole', null);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userRole: (state) => {
      console.log('Getter - User Role:', state.userRole);
      return state.userRole;
    },
  },
});
