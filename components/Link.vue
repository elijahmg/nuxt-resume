<template>
  <NuxtLink :to="hrf" class="ml-8 tracking-widest link p-2">
    <slot></slot>
  </NuxtLink>
</template>

<script>
export default {
  name: 'Link',
  props: {
    hrf: {
      type: String,
      required: true,
      default: '',
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
.link {
  transition: var(--transition);
  font-family: var(--font-mono);
  font-weight: 400;

  &:hover {
    color: var(--green);
  }
}
</style>
