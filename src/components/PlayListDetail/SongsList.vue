<template>
  <div class="songsList">
    <!-- 上 -->
    <div class="listTop">
      <!-- 上左 -->
      <div class="left">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-bofang"></use>
        </svg>
        <span
          >播放全部<span>(共{{ SongsList.length }}首)</span></span
        >
      </div>
      <!-- 上右 -->
      <div class="right">
        <van-button round type="danger"> 收藏({{ shoucan }})</van-button>
      </div>
    </div>
    <!-- 下 -->
    <div class="listBottom">
      <div class="song" v-for="(item, index) in SongsList" :key="item.id">
        <!-- 下左 -->
        <div class="B-left" @click="playSong(index)">
          <span>{{ index + 1 }}</span>
          <div class="name">
            <p>{{ item.name }}</p>
            <span v-for="item2 in item.ar" :key="item2.id">{{ item2.name }}</span>
          </div>
        </div>
        <!-- 下右 -->
        <div class="B-right">
          <svg class="icon mv" aria-hidden="true" v-if="item.mv !== 0">
            <use xlink:href="#icon-shipin"></use>
          </svg>
          <svg class="icon more" aria-hidden="true">
            <use xlink:href="#icon-hanbaobao"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: ['SongsList', 'shoucan'],
  setup(props) {},
  methods: {
    playSong(index) {
      this.UPDATEPlayList(this.SongsList)
      this.UPDATEPlayListIndex(index)
    },
    ...mapMutations(['UPDATEPlayList', 'UPDATEPlayListIndex'])
  }
}
</script>

<style lang="less" scoped>
.songsList {
  width: 100%;
  height: 10rem;
  background-color: #fff;
  margin-top: 0.2rem;
  padding: 0 0.2rem;
  border-top-left-radius: 0.4rem;
  border-top-right-radius: 0.4rem;
  .listTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
      width: 3.2rem;
      height: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-weight: 700;
        font-size: 0.36rem;
        span {
          font-size: 0.25rem;
          color: #999;
        }
      }
      .icon {
        stroke: #333333;
        stroke-width: 20;
      }
    }
    .right {
      .van-button {
        font-size: 0.32rem;
      }
    }
  }
  .listBottom {
    width: 100%;
    padding-bottom: 1.4rem;
    .song {
      width: 100%;
      height: 1.4rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .B-left {
        width: 80%;
        height: 100%;
        display: flex;
        align-items: center;
        .name {
          padding-left: 0.3rem;
          p {
            font-weight: 700;
            padding-bottom: 0.1rem;
          }
          span {
            font-size: 0.24rem;
            color: #999;
          }
        }
      }
      .B-right {
        position: relative;
        width: 20%;
        height: 100%;
        display: flex;
        align-items: center;
        .mv {
          position: absolute;
          top: 0;
        }
        .more {
          position: absolute;
          right: 0;
          top: 0;
        }
      }
    }
  }
}
</style>
