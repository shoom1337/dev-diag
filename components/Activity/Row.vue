<template>
  <el-row>
    <el-checkbox v-model="checked" :label="name" border class="checkbox" />
  </el-row>
</template>

<script>
export default {
  name: 'Row',
  props: ['name', 'type'],
  computed: {
    checked: {
      get() {
        return this.$store.getters['activities/getActivityValue'](this.type)(
          this.name
        );
      },
      set() {
        this.$store.commit('activities/toggleActivity', {
          type: this.type,
          activity: this.name,
        });
      },
    },
  },
};
</script>

<style scoped>
.checkbox {
  width: 100%;
  margin-bottom: var(--gap-s);
}
</style>
