<template>
  <div class="flex justify-between">
    <PersonalLogo class="logo" />
    <div class="nav">
      <button class="menu-button" @click="show = !show">
        <HamMenu :isMenuDisplayed="show" />
      </button>
      <transition name="fade">
        <div v-if="show" class="navigation-block">
          <Link hrf="/"> Home</Link>
          <Link hrf="/tech"> Tech</Link>
          <Link hrf="/experience"> Experience</Link>
        </div>
      </transition>
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
  data() {
    return {
      show: !this.$store.state.isMobile,
    };
  },
  beforeMount() {
    window.addEventListener('resize', () => {
      this.show = window.innerWidth > 768;
    });
  },
  destroyed() {
    window.removeEventListener(
      'resize',
      () => (this.show = window.innerWidth > 768),
    );
  },
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

  .menu-button {
    display: block;
  }

  .navigation-block {
    background-color: rgba(10, 25, 47, 0.85);
    position: absolute;
    top: 96px;
    z-index: 10;
    width: 100%;
    backdrop-filter: blur(10px);
    filter: none !important;
  }
}
</style>
