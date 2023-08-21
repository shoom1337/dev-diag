<template>
  <el-card class="card">
    <div slot="header">
      <span>{{ header }}</span>
    </div>
    <ActivityRow
      v-for="{ name, id } in activities"
      :key="id"
      :name="name"
      :type="type"
    />
  </el-card>
</template>

<script>
import { emoji } from '../../constants/common';
export default {
  name: 'Column',

  // eslint-disable-next-line vue/require-prop-types
  props: ['activities', 'type'],

  data() {
    return {
      header: emoji[this.type],
    };
  },
};
</script>

<style scoped>
.card {
  margin-top: var(--gap-m);
}
</style>
