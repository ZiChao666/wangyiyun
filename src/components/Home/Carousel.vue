<template>
  <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in state.images" :key="image.bannerId">
      <img :src="image.pic" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
import { reqBannerList } from '@/api/index'
import { onMounted, reactive } from 'vue'
export default {
  setup() {
    const state = reactive({
      images: []
    })
    onMounted(async () => {
      let result = await reqBannerList()
      state.images = result.data.banners
    })
    return { state }
  }
}
</script>

<style lang="less" scoped>
.van-swipe {
  width: 100%;
  height: 3rem;
  .van-swipe-item {
    padding: 0.1rem 0.2rem;
    img {
      width: 100%;
      height: 100%;
      border-radius: 0.2rem;
    }
  }
  :deep(.van-swipe__indicator--active) {
    background-color: rgb(219, 130, 130);
  }
}
</style>
