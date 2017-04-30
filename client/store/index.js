import Vue from 'vue';
import Vuex from 'vuex';
import feathersVuex from 'feathers-vuex';
import feathers from '~feathers';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},
});

feathers.configure(feathersVuex(store, {
  idField: '_id',
  auth: {
    userService: '/users',
  },
}));

export default store;
