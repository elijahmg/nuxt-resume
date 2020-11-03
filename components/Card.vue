<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg card">
    <div class="px-6 py-4">
      <div class="font-bold mb-2 title">{{ title }}</div>
      <div class="place">{{ place }}</div>
      <span class="date">{{ date }}</span>
      <div class="position">{{ position }}</div>
      <p class="text-base">
        <slot></slot>
      </p>
    </div>
    <div class="px-6 pt-4 pb-2">
      <Tag v-for="tag in tags" :key="tag">{{ tag }}</Tag>
    </div>
  </div>
</template>

<script>
import Tag from '~/components/Tag.vue';

export default {
  name: 'Card',
  components: { Tag },
  props: {
    tags: {
      type: Array,
      default() {
        return [];
      },
    },
    title: {
      type: String,
      default() {
        return '';
      },
    },
    date: {
      type: String,
      default() {
        return '';
      },
    },
    place: {
      type: String,
      default() {
        return '';
      },
    },
    position: {
      type: String,
      default() {
        return '';
      },
    },
  },
};
</script>

<style scoped lang="scss">
.card {
  height: fit-content;
  background-color: var(--light-navy);
  box-shadow: var(--slate) 1px 2px 2px;
  transition: var(--transition);

  &:hover {
    transform: matrix3d(1, 0, 0, 0, 0, 1, 0, 0.001, 0, 0, 1, 0, 0, 0, 0, 1);
    box-shadow: var(--slate) 10px 20px 5px;
  }
}

.title {
  font-family: var(--font-sans);
  font-size: var(--fz-xxl);
  color: var(--white);
}

.place {
  color: var(--lightest-slate);
}

.date {
  font-size: var(--fz-xs);
  font-weight: 600;
}

.position {
  font-family: var(--font-mono);
  font-size: var(--fz-sm);
  color: var(--green);
  margin-top: 1rem;
}

p {
  color: var(--lightest-slate);
  margin: 1.5rem 0 0;
}
</style>
