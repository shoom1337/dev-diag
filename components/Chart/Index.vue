<template>
  <div class="chart">
    <ChartAxisX />
    <ChartAxisY />
    <ChartDot />
  </div>
</template>

<script>
export default {
  name: 'Chart',
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
