<template>
  <div class="dot" :style="position"></div>
</template>
<script>
export default {
  name: 'Dot',
  computed: {
    position() {
      const { x, y } =
        this.$store.getters['activities/getCheckedActivitiesCount'];
      return {
        bottom: `${x * 30 + x}px`,
        left: `${y * 30 + y}px`,
      };
    },
  },
};
</script>

<style scoped>
.dot {
  position: absolute;

  bottom: 0px;
  left: 1px;
  transform: translate(-10px, 10px);
  width: 20px;
  height: 20px;
  background-color: #dcdfe6;
  border: 1px solid #9ea0a3;
  border-radius: 50%;
}
</style>
