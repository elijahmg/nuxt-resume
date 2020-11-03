<template>
  <div class="ham-box">
    <div class="ham-box-inner" :style="cssVars"></div>
  </div>
</template>

<script>
export default {
  name: 'HamMenu',
  props: {
    isMenuDisplayed: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cssVars() {
      return {
        '--before-width': this.isMenuDisplayed ? `100%` : `120%`,
        '--before-top': this.isMenuDisplayed ? `0` : `-10px`,
        '--before-opacity': this.isMenuDisplayed ? 0 : 1,
        '--before-transition': this.isMenuDisplayed
          ? 'var(--ham-before-active)'
          : 'var(--ham-before)',
        '--after-width': this.isMenuDisplayed ? `100%` : `80%`,
        '--after-bottom': this.isMenuDisplayed ? `0` : `-10px`,
        '--after-transform': this.isMenuDisplayed ? `-90deg` : `0`,
        '--after-transition': this.isMenuDisplayed
          ? 'var(--ham-after-active)'
          : 'var(--ham-after)',
        '--inner-rotate': this.isMenuDisplayed ? '225deg' : '0deg',
      };
    },
  },
};
</script>

<style scoped lang="scss">
.ham-box {
  display: inline-block;
  position: relative;
  width: var(--hamburger-width);
  height: 24px;
}

.ham-box-inner {
  position: absolute;
  top: 50%;
  right: 0px;
  width: var(--hamburger-width);
  height: 2px;
  border-radius: var(--border-radius);
  background-color: var(--green);
  transition: transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19) 0s;
  transform: rotate(var(--inner-rotate));

  &:after,
  &:before {
    content: '';
    display: block;
    position: absolute;
    left: auto;
    right: 0px;
    width: var(--hamburger-width);
    height: 2px;
    border-radius: 4px;
    background-color: var(--green);
    transition-timing-function: ease;
    transition-duration: 0.15s;
    transition-property: transform;
  }

  &:after {
    width: var(--after-width);
    bottom: var(--after-bottom);
    transform: rotate(var(--after-transform));
    transition: var(--after-transition);
  }

  &:before {
    width: var(--before-width);
    top: var(--before-top);
    opacity: var(--before-opacity);
    transition: var(--before-transtion);
  }
}
</style>
