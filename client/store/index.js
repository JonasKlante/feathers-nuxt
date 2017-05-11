import Vue from 'vue'; // eslint-disable-line import/no-extraneous-dependencies
import Vuex from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies
import feathersVuex from 'feathers-vuex';
import feathers from '~api';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
});

feathers.configure(feathersVuex(store, {
  idField: 'id',
  auth: {
    userService: '/users',
  },
}));

feathers.service('users');

export default store;
