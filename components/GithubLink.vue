<template>
  <el-col :span="1" :offset="21">
    <a :href="link">
      <img src="/github.svg" class="icon" />
    </a>
  </el-col>
</template>

<script>
import { repo } from '~/constants/common';
export default {
  name: 'GithubLink',
  data() {
    return {
      link: repo,
    };
  },
};
</script>

<style scoped>
.icon {
  height: 40px;
  width: 40px;
  padding-bottom: var(--gap-m);
}
</style>
