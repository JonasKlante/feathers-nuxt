<template>
  <div>
    <form>
      <h1>Sign in!</h1>
      <ul>
        <li><input v-model="email" type="text" placeholder="E-mail"></li>
        <li><input v-model="password" type="password" placeholder="Password"></li>
        <li><input type="submit" @click.prevent="signIn"></li>
      </ul>
    </form>

    <form>
      <h1>Register!</h1>
      <ul>
        <li><input v-model="email" type="text" placeholder="E-mail"></li>
        <li><input v-model="password" type="password" placeholder="Password"></li>
        <li><input type="submit" @click.prevent="register"></li>
      </ul>
    </form>
  </div>
</template>

<script>
export default {
  name: 'authentication',

  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    signIn() {
      console.log('Should login');
    },

    register() {
      console.log('Should register');
    },
  },
};
</script>

<style scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  form {
    margin: 1em;
    padding: 1em;
    border: 1px solid #DDD;
  }
</style>
