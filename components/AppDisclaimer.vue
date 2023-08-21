<template>
  <el-col :span="22" :offset="1">
    <h1 v-if="content.header">{{ content.header }}</h1>
    <TypographyParagraph :paragraphs="content.paragraphs" />
  </el-col>
</template>

<script>
import content from '../content/app-disclaimer.json';
export default {
  name: 'AppDisclaimer',
  data() {
    return {
      content,
    };
  },
};
</script>

<style scoped>
</style>
