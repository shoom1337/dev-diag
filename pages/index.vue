<template>
  <div class="wrapper">
    <AppInfo />
    <ActivityTab />
    <ButtonSubmit />
    <ButtonReset />
    <AppDisclaimer />
    <GithubLink />
    <Result />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'IndexPage',
  head() {
    return {
      title: 'Сам себе лид',
    };
  },
});
</script>

<style scoped>
.wrapper {
  max-width: 1200px;
  margin: 0 auto;
}
</style>
