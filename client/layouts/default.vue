<template>
  <div class="default-layout">
    <main-menu />
    <nuxt />
  </div>
</template>

<script>
import mainMenu from '~components/main-menu.vue';
import { mapActions, mapState } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

export default {
  name: 'default-layout',

  components: { mainMenu },

  computed: {
    ...mapState('auth', ['user']),
  },

  methods: {
    ...mapActions({
      authenticate: 'auth/authenticate',
    }),
  },

  mounted() {
    if (this.user) this.authenticate();
  },
};
</script>
