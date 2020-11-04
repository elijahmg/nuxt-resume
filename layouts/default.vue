<template>
  <div>
    <Header class="sticky" />
    <LeftLinkList />
    <RightSideBar />
    <Nuxt />
  </div>
</template>

<script>
import LeftLinkList from '@/components/LeftLinkList';
import RightSideBar from '@/components/RightSideBar';
import Header from '../components/global/Header';

export default {
  components: { RightSideBar, LeftLinkList, Header },
  middleware: ['user-agent'], // set user agent to vuex store
};
</script>
<style></style>
