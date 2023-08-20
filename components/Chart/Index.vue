<template>
  <el-dialog
    title="Результат"
    :visible="visible"
    width="300px"
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
  height: 250px;
  width: 250px;
  margin: 20px auto;
  margin-top: 0;
}
</style>
