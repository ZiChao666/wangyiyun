<template>
  <TopNav></TopNav>
  <Carousel></Carousel>
  <Icons></Icons>
  <MusicList></MusicList>
</template>

<script>
import TopNav from '@/components/Home/TopNav'
import Carousel from '@/components/Home/Carousel'
import Icons from '@/components/Home/Icons'
import MusicList from '@/components/Home/MusicList'
export default {
  name: 'HomeView',
  components: {
    TopNav,
    Carousel,
    Icons,
    MusicList
  }
}
</script>
<style lang="less" scoped></style>
