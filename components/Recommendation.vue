<template>
  <div>
    <el-row class="row">
      <span class="bold">Склонность: </span>
      {{ recommendation.way }}
    </el-row>
    <el-row>
      <TypographyParagraph :paragraphs="[recommendation.hint]" />
    </el-row>
    <el-divider></el-divider>
    <el-row>
      <span class="bold">Советы: </span>
      <TypographyParagraph :paragraphs="recommendation.recommendations" />
    </el-row>
  </div>
</template>

<script>
import { getRecommendation } from '../utils/get-recommendation';
export default {
  name: 'Recommendation',
  computed: {
    recommendation() {
      return getRecommendation(
        this.$store.getters['activities/getCheckedActivities']
      );
    },
  },
};
</script>

<style scoped>
.row {
  word-break: keep-all;
}
.bold {
  font-weight: bold;
}
</style>
