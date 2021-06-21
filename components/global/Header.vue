<template>
  <div class="flex justify-between">
    <PersonalLogo class="logo"/>
    <div class="nav">
      <div class="navigation-block">
        <Link hrf="/"> Home</Link>
        <Link hrf="/tech"> Tech</Link>
        <Link hrf="/experience"> Experience</Link>
      </div>
    </div>
  </div>
</template>

<script>
import PersonalLogo from '@/components/PersonalLogo';
import Link from '~/components/Link.vue';
import HamMenu from '@/components/HamMenu';

export default {
  name: 'Header',
  components: { HamMenu, PersonalLogo, Link },
};
</script>

<style scoped lang="scss">
header {
  position: fixed;
}

.logo {
  margin: 2rem 0 0 2rem;
}

.nav {
  background-color: transparent;
  z-index: 50;
  display: flex;
  justify-content: flex-end;
  margin: 2rem 2rem 0;
}

.menu-button {
  padding: 0.5rem;
  margin-left: 2rem;
  display: none;
  text-align: right;
  font-family: var(--font-mono);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .nav a {
    display: block;
    text-align: right;
  }
}
</style>
