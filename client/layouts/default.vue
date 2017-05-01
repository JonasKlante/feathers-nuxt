<template>
  <div class="default-layout">
    <main-menu />
    <nuxt />
  </div>
</template>

<script>
import '~feathers';
import mainMenu from '~components/main-menu';

export default {
  name: 'default-layout',

  components: { mainMenu },
};
</script>
