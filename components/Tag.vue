<template>
  <span class="inline-block rounded-full px-3 py-1 text-sm mr-2 mb-2 tag"
    ><slot></slot>
  </span>
</template>

<script>
export default {
  name: 'Tag',
};
</script>

<style scoped lang="scss">
.tag {
  background-color: var(--lightest-slate);
  color: var(--navy);
  text-align: center;
  font-weight: 600;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
}
</style>
