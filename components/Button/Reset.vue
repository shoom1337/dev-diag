<template>
  <el-button plain class="button" @click="onClick">Сбросить</el-button>
</template>

<script>
export default {
  name: 'Reset',
  methods: {
    onClick() {
      this.$store.commit('activities/removeStateFromLS');
      this.$store.commit('activities/resetState');
    },
  },
};
</script>

<style scoped>
.button {
  display: block;
  margin: var(--gap-s) auto;
}
</style>
