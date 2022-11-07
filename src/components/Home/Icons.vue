<template>
  <div class="icons">
    <div class="center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-tuijian"></use>
      </svg>
      <div>每日推荐</div>
    </div>
    <div class="center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-dianshiji"></use>
      </svg>
      <div>私人FM</div>
    </div>
    <div class="center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-gedan"></use>
      </svg>
      <div>歌单</div>
    </div>
    <div class="center">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-paihangbang"></use>
      </svg>
      <div>排行榜</div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.icons {
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-around;
  padding: 0.2rem;
  .center {
    width: 25%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>
