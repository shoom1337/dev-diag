<template>
  <el-dialog
    title="Результат"
    :visible="visible"
    width="300px"
    :before-close="handleClose"
  >
    <Chart />
    <Recommendation />
  </el-dialog>
</template>
<script>
export default {
  name: 'Result',
  computed: {
    visible() {
      return this.$store.getters['dialog/getIsOpen'];
    },
  },
  methods: {
    handleClose() {
      this.$store.commit('dialog/toggleIsOpen');
    },
  },
};
</script>
