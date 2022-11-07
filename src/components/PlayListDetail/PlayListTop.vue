<template>
  <div class="detail">
    <!-- 顶部 -->
    <div class="detailTop">
      <img :src="playlist.coverImgUrl" alt="" class="bgimg" />
      <!-- 顶部 顶部 -->
      <div class="detailTop-top">
        <span style="display: block; width: 5px; height: 5px">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-zuojiantou" @click="$router.go(-1)"></use>
          </svg>
        </span>
        <span class="music">歌单</span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-sousuo1"></use>
          </svg>
        </span>
        <span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-hanbaobao"></use>
          </svg>
        </span>
      </div>
      <!-- 顶部 中部 -->
      <div class="detailTop-center">
        <div class="cleft">
          <img :src="playlist.coverImgUrl" alt="" />
        </div>
        <div class="cright">
          <p>{{ playlist.name }}</p>
          <div>
            <img :src="playlist.creator.backgroundUrl" alt="" class="rightimg" />
            <span>{{ playlist.creator.nickname }}</span>
          </div>
          <p>{{ playlist.description }}</p>
        </div>
      </div>
      <!-- 顶部尾部 -->
      <div class="detailTop-bottom"></div>
    </div>
    <div class="detailBottom"></div>
  </div>
</template>

<script>
export default {
  setup(props) {
    // 通过props进行传值，判断如果数据拿不到，就获取sessionStorage中的
    props.playlist.creator = ''
    console.log(props)
  },
  props: ['playlist']
}
</script>

<style lang="less" scoped>
.detailTop {
  position: relative;
  width: 100%;
  height: 6rem;
  .detailTop-top {
    width: 100%;
    position: fixed;
    display: flex;
    justify-content: space-between;
    padding: 0.4rem 0.2rem;
    .music {
      font-weight: 700;
      font-size: 0.36rem;
      padding-right: 3rem;
      color: #fff;
    }
    .icon {
      fill: #fff;
    }
  }
  .bgimg {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(30px);
  }
  .detailTop-center {
    width: 100%;
    display: flex;
    justify-content: space-between;
    .cleft {
      img {
        margin-left: 10px;
        margin-top: 1.25rem;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 0.3rem;
      }
    }
    .cright {
      height: 2.6rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .rightimg {
        width: 0.6rem;
        height: 0.6rem;
        border-radius: 50%;
      }
    }
  }
}
</style>
