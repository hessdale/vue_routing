<template>
  <div>
    <header id="pageheader">
      <page-header></page-header>
    </header>
    <p>simple</p>
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