import Vue from 'vue';
import Vuex from 'vuex'; // eslint-disable-line
import feathersVuex from 'feathers-vuex';
import feathers from '~feathers';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},

  actions: {
    nuxtServerInit({ dispatch }, { req }) {
      // feathers.authenticate() goes here
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
