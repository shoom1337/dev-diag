<template>
  <div v-if="paragraphs">
    <p v-for="(p, i) in paragraphs" :key="i">{{ p }}</p>
  </div>
</template>

<script>
export default {
  name: 'Paragraph',
  // eslint-disable-next-line vue/require-prop-types
  props: ['paragraphs'],
};
</script>
