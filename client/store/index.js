import Vue from 'vue';
import Vuex from 'vuex';
import jwtDecode from 'jwt-decode';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {},

  actions: {
    nuxtServerInit({ dispatch }, { req }) {
      let token;
      const cookies = req.feathers.headers.cookie;
      const jwtCookie = cookies.split(';')
        .filter(cookie => cookie.indexOf('jwt') >= 0)[0];

      if (jwtCookie) {
        token = jwtCookie.split('=')[1];

        dispatch('user/get', jwtDecode(token).userId);
      }
    },
  },
});

export default store;
