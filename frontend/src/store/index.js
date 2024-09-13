import { createStore } from 'vuex';

export default createStore({
  state: {
    isAuthenticated: false,
    userRole: null,
  },
  mutations: {
    setAuthentication(state, status) {
      console.log('Mutation - Set Authentication:', status); // Debugging
      state.isAuthenticated = status;
    },
    setUserRole(state, role) {
      console.log('Mutation - Set User Role:', role); // Debugging
      state.userRole = role;
    },
  },
  actions: {
    login({ commit }, { role }) {
      console.log('Action - Login Role:', role); // Debugging
      commit('setAuthentication', true);
      commit('setUserRole', role);
    },
    logout({ commit }) {
      console.log('Action - Logout'); // Debugging
      commit('setAuthentication', false);
      commit('setUserRole', null);
    },
  },
  getters: {
    isAuthenticated: (state) => state.isAuthenticated,
    userRole: (state) => {
      console.log('Getter - User Role:', state.userRole); // Debugging
      return state.userRole;
    },
  },
});
