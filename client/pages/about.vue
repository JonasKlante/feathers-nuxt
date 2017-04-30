<template>
  <div>
    <h1>About</h1>
    <p>This was rendered by the {{ renderer }}</p>
    <ul>
      <li><nuxt-link to="/" exact>Home</nuxt-link></li>
      <li><nuxt-link to="/admin">Sign in</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  asyncData({ req, }) {
    return {
      renderer: req ? 'server' : 'client',
    }
  }
}
</script>
