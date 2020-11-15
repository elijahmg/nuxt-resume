<template>
  <div class="side-wrapper list">
    <ul>
      <li>
        <a href="https://github.com/elijahmg" target="_blank">
          <GitHubIcon />
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/ilya-fakhrutdinov-b01aa5b4/" target="_blank">
          <LinkdinIcon />
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import GitHubIcon from '~/components/Icons/GitHubIcon.vue';
import LinkdinIcon from '~/components/Icons/LinkdinIcon.vue';

export default {
  name: 'LeftLinkList',
  components: { LinkdinIcon, GitHubIcon },
};
</script>

<style scoped lang="scss">
.side-wrapper {
  display: none;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  width: 40px;
  position: fixed;
  bottom: 0px;
  left: 25px;
  right: auto;
  z-index: 10;
  color: var(--light-slate);

  @media (min-width: 1024px) {
    display: flex;
  }
}

.list ul {
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  margin: 0px;
  padding: 0px;
  list-style: none;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 200px;
    margin: 0px auto;
    background-color: var(--light-slate);
  }

  li {
    padding: 10px;

    &:last-of-type {
      margin-bottom: 20px;
    }

    svg {
      width: 24px;
      height: 24px;
    }

    a:hover {
      color: var(--green);
      transform: scale(1.1);
    }
  }
}
</style>
