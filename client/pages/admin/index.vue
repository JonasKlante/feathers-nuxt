<template>
  <div class="protected">
    <h1>Protected!</h1>
    <p>This is only for authenticated users!</p>
  </div>
</template>

<script>
import { mapActions } from 'vuex'; // eslint-disable-line import/no-extraneous-dependencies

export default {
  name: 'protected',
  middleware: 'check-auth',

  methods: {
    ...mapActions({
      getUser: 'users/get',
    }),
  },

  created() {
    const id = this.$store.state.auth.user.id;
    this.getUser(id);
  },
};
</script>
