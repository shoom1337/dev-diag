<template>
  <div>
    <ActivityTab />
    <ButtonSubmit />
    <ButtonReset />
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
