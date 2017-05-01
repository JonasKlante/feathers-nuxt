<template>
  <div class="protected">
    <h1>Protected!</h1>
    <p>This is only for authenticated users!</p>
  </div>
</template>

<script>
export default {
  name: 'protected',
  middleware: 'auth',
};
</script>
