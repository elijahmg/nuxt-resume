<template>
  <div class="logo-wrapper">
    <div class="main-logo">
      <p>IF</p>
    </div>
    <div class="cut-logo" />
  </div>
</template>

<script>
export default {
  name: 'PersonalLogo',
};
</script>

<style scoped lang="scss">
.logo-wrapper {
  display: block;
  width: 64px;
  height: 64px;
  position: relative;
  border: var(--green) 2px solid;
  z-index: 5;
}

.main-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
  width: 64px;
  height: 64px;

  p {
    font-family: var(--font-mono);
    font-size: var(--fz-xl);
    color: var(--green);
    z-index: 15;
  }
}

.cut-logo {
  display: block;
  width: 64px;
  height: 64px;
  background: var(--navy);
  position: relative;
  top: -55px;
  left: 0;
  z-index: 10;
}
</style>
