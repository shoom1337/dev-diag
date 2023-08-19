<template>
  <el-card class="card">
    <div slot="header">
      <span>{{ type }}</span>
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
export default {
  name: 'Column',

  props: ['activities', 'type'],
};
</script>

<style scoped>
.card {
  margin-top: var(--gap-m);
}
</style>
