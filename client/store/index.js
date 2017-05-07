import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import feathersVuex from 'feathers-vuex';
import parseCookies from '~utils/parse-cookies';
import feathers from '~feathers';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},

  actions: {
    nuxtServerInit({ commit, dispatch }, { req }) {
      const accessToken = parseCookies(req)['feathers-jwt'];

      if (accessToken) {
        commit('auth/setAccessToken', accessToken);
        dispatch('auth/authenticate', { strategy: 'jwt', accessToken });
      }
    },
  },
});

feathers.configure(feathersVuex(store, {
  idField: 'id',
  auth: {
    userService: '/users',
  },
}));

feathers.service('users');

export default store;
