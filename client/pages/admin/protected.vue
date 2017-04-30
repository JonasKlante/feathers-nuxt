<template>
  <div>
    <h1>Protected!</h1>
    <ul>
        <li><nuxt-link to="/" exact>Home</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
        <li><a href="#" @click.prevent="signOut">Sign out</a></li>
    </ul>
  </div>
</template>
