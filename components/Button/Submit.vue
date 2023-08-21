<template>
  <el-button
    type="primary"
    class="button"
    :disabled="isDisabled"
    @click="onClick"
  >
    Узнать результат
  </el-button>
</template>

<script>
export default {
  name: 'Submit',
  computed: {
    isDisabled() {
      const { x, y } =
        this.$store.getters['activities/getCheckedActivitiesCount'];

      return x + y === 0;
    },
  },
  methods: {
    onClick() {
      this.$store.commit('dialog/toggleIsOpen');
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
