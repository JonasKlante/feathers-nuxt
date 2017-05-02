<template>
  <div class="default-layout">
    <main-menu />
    <nuxt />
  </div>
</template>

<script>
import mainMenu from '~components/main-menu.vue';

export default {
  name: 'default-layout',

  components: { mainMenu },
};
</script>
