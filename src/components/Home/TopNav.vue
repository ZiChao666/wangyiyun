<template>
  <div class="TopNav">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-hanbaobao"></use>
    </svg>
    <div class="TopCenter">
      <span @click="$router.push('/userinfo')">我的</span>
      <span class="active">发现</span>
      <span>云村</span>
      <span>视频</span>
    </div>
    <svg class="icon" aria-hidden="true" @click="$router.push('./search')">
      <use xlink:href="#icon-sousuo2-copy"></use>
    </svg>
  </div>
</template>

<script>
export default {
  name: 'TopNav'
}
</script>

<style lang="less" scoped>
.TopNav {
  width: 100%;
  height: 1rem;
  padding: 0.3rem;
  display: flex;
  justify-content: space-between;
  .TopCenter {
    display: flex;
    width: 60%;
    height: 100%;
    justify-content: space-around;
    font-size: 0.36rem;
    .active {
      font-weight: 700;
    }
  }
}
</style>
