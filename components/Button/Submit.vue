<template>
  <el-button type="primary" class="button" @click="onClick"
    >Узнать результат</el-button
  >
</template>

<script>
export default {
  name: 'Submit',
  methods: {
    onClick() {
      this.$store.commit('activities/saveStateToLS');
    },
  },
};
</script>

<style scoped>
.button {
  display: block;
  margin: var(--gap-l) auto;
  margin-bottom: var(--gap-m);
}
</style>
