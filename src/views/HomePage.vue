<template>
  <div>
    <header id="pageheader">
      <page-header></page-header>
    </header>
    <h1>home</h1>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader.vue";
export default {
  name: `pageheader`,
  components: {
    PageHeader,
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>