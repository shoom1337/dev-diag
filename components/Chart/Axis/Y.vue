<template>
  <div class="wrapper">
    <div class="axis"></div>
    <div class="dashes">
      <div v-for="d in dashCount" :key="d" class="dash"></div>
    </div>
    <div class="emoji">emoji</div>
  </div>
</template>

<script>
export default {
  name: 'Y',
  data() {
    return {
      dashCount: 6,
    };
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  bottom: 0;
  width: 100px;
  height: 240px;
}
.axis,
.dash {
  background-color: #dcdfe6;
}
.axis {
  position: absolute;
  bottom: 0;
  height: 210px;
  width: 1px;
}

.dashes {
  position: absolute;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}
.dash {
  height: 2px;
  width: 10px;
  margin-bottom: 30px;
}
.emoji {
  position: absolute;
  top: 0;
}
</style>
