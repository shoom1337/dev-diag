<template>
  <div class="content">
    <el-col :span="22" :md="{ span: 8 }">
      <ActivityColumn :activities="activities.vertical" type="vertical" />
    </el-col>
    <el-col :span="22" :md="{ span: 8 }">
      <ActivityColumn :activities="activities.horizontal" type="horizontal" />
    </el-col>
  </div>
</template>

<script>
import activities from '~/content/activities.json';
export default {
  name: 'Tab',

  data() {
    return { activities };
  },
};
</script>

<style scoped>
.content {
  display: flex;
  justify-content: space-around;
  margin-bottom: var(--gap-m);
  width: 100%;
}

@media (max-width: 991px) {
  .content {
    flex-direction: column;
    align-items: center;
  }
}
</style>
