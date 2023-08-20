<template>
  <el-dialog
    title="Ваш график"
    :visible="visible"
    width="500px"
    :before-close="handleClose"
  >
    <div class="chart">
      <ChartAxisX />
      <ChartAxisY />
      <ChartDot />
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Chart',
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
<style scoped>
.chart {
  position: relative;
  height: 400px;
  margin: 20px;
}
</style>
