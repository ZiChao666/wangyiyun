<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more"><van-button round size="small">查看更多</van-button></div>
    </div>
    <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe class="swipeConent" :loop="false" :width="150" :show-indicators="false">
        <van-swipe-item v-for="item in data.GoodMusicList" :key="item.id">
          <router-link :to="{ path: '/musicitem', query: { id: item.id } }">
            <img :src="item.picUrl" class="swipePic" />
            <span class="playCount">
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-bofang1"></use>
              </svg>
              {{ changeCount(item.playCount) }}
            </span>
            <span class="name">{{ item.name }}</span>
          </router-link>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { reqGetGoodMusicList } from '@/api'
import { reactive } from '@vue/reactivity'
import { onMounted } from '@vue/runtime-core'
export default {
  setup() {
    let data = reactive({
      GoodMusicList: []
    })
    // 获取数据
    onMounted(async () => {
      let res = await reqGetGoodMusicList()
      if (res.data.code == 200) {
        data.GoodMusicList = res.data.result
      }
    })
    // 计算播放量
    // const count = computed(() => {
    //   return data.GoodMusicList.forEach((item) => {
    //     console.log(item.playCount)
    //     if (item.playCount >= 100000000) {
    //       return (item.playCount / 100000000).toFixed(1) + '亿'
    //     } else if (item.playCount >= 10000) {
    //       return (item.playCount / 10000).toFixed(1) + '万'
    //     }
    //   })
    // })
    const changeCount = (num) => {
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + '亿'
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + '万'
      }
    }
    return { data, changeCount }
  }
}
</script>

<style lang="less" scoped>
.musicList {
  .musicTop {
    display: flex;
    justify-content: space-between;
    padding: 0 0.2rem;
    .title {
      font-weight: 900;
      font-size: 0.42rem;
    }
  }
  .swipe {
    width: 100%;
    height: 4rem;
    padding-left: 0.2rem;
    .van-swipe-item {
      padding-right: 0.2rem;
      position: relative;
      height: 3.8rem;

      .swipePic {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 3rem;
        border-radius: 0.2rem;
      }
      .playCount {
        position: absolute;
        right: 0.3rem;
        top: 0;
        color: #fff;
        font-size: 0.2rem;
        width: 1.7rem;
        margin-top: 0.2rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #999;
        background-color: #999;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, 0.5);
        .icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
      .name {
        color: #000;
      }
    }
  }
}
</style>
