<template>
  <div v-if="paragraphs">
    <p v-for="(p, i) in paragraphs" :key="i" class="paragraph">{{ p }}</p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  // eslint-disable-next-line vue/require-prop-types
  props: ['paragraphs'],
};
</script>

<style scoped>
.paragraph {
  word-break: keep-all;
}
</style>
