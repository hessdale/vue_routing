<template>
  <div>
    <router-link to="/">home</router-link>
    <router-link to="/menu">menu</router-link>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>