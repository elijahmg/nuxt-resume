<template>
  <div class="side-wrapper">
    <div class="wrap">
      <a href="mailto:elijahmg25@gmail.com">elijahmg25@gmail.com</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightSideBar',
};
</script>

<style scoped lang="scss">
.side-wrapper {
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: auto;
  right: 25px;
  z-index: 10;
  color: var(--light-slate);
  display: none;

  @media (min-width: 1024px) {
    display: block;
  }
}

.wrap {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 200px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }
}

.wrap a {
  margin: 20px auto;
  padding: 10px;
  letter-spacing: 0.1rem;
  font-family: var(--font-mono);
  font-size: var(--fz-xxs);
  writing-mode: vertical-rl;

  &:hover {
    color: var(--green);
    transform: translateY(-6px);
  }
}
</style>
