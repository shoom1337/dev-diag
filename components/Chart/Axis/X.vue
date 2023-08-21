<template>
  <div class="wrapper">
    <div class="axis"></div>
    <div class="dashes">
      <div v-for="d in dashCount" :key="d" class="dash"></div>
    </div>
    <div class="emoji">{{ emoji }}</div>
  </div>
</template>

<script>
import { emoji } from '../../../constants/common';
export default {
  name: 'X',
  data() {
    return {
      dashCount: 6,
      emoji: emoji.horizontal,
    };
  },
};
</script>

<style scoped>
.wrapper {
  position: absolute;
  bottom: 0;
  width: 240px;
  height: 100px;
}
.axis,
.dash {
  background-color: #dcdfe6;
}
.axis {
  position: absolute;
  bottom: 0;
  width: 210px;
  height: 1px;
}

.dashes {
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
}
.dash {
  height: 10px;
  width: 1px;
  margin-left: 30px;
}

.emoji {
  position: absolute;
  right: -10px;
  bottom: 0;
  font-size: 30px;
}
</style>
