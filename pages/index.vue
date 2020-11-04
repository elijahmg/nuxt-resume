<template>
  <section class="justify-between flex wrapper">
    <PersonalMessage class="personal-message" />
    <div class="w-10/12 justify-end absolute image-wrapper">
      <div class="image" />
    </div>
  </section>
</template>

<script>
import Vue from 'vue';
import PersonalMessage from '@/components/PersonalMessage';

export default Vue.extend({
  components: { PersonalMessage },
});
</script>

<style scoped lang="scss">
.image-wrapper {
  display: none;

  @media (min-width: 1280px) {
    display: flex;
  }
}

.wrapper {
  padding-left: 2rem;
  padding-right: 2rem;

  @media (min-width: 1024px) {
    padding-left: 6rem;
    padding-right: 6rem;
  }
}

.image {
  background-position: center;
  background-image: url('~assets/pic.png');
  background-size: 40vw;
  width: 40vw;
  height: 40vw;
  background-repeat: no-repeat;
}

.personal-message {
  margin: 4rem 0 0 2rem;

  @media (max-width: 768px) {
    margin: 2rem 0 0;
    z-index: -1;
  }
}
</style>
