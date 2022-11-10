<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
      <use xlink:href="#icon-zuojiantou"></use>
    </svg>
    <input type="text" placeholder="陈奕迅" v-model="searchKey" @keydown.enter="enterKey" />
  </div>
  <div class="searchHistory" v-show="keyWorldList.length >= 1">
    <div class="sh_top">
      <p style="font-weight: 700">历史</p>
      <svg class="icon" aria-hidden="true" @click="deleteHistory">
        <use xlink:href="#icon-shanchu"></use>
      </svg>
    </div>
    <span v-for="item in keyWorldList" :key="item" style="margin: 0 3px" @click="searchHistory(item)"
      ><van-button round size="mini">{{ item }}</van-button></span
    >
  </div>
  <div class="itemList">
    <div class="item" v-for="(item, i) in searchList" :key="i">
      <div class="itemLeft" @click="updateIndex(item)">
        <span class="leftSpan">{{ i + 1 }}</span>
        <div>
          <p>{{ item.name }}</p>
          <span v-for="(item1, index) in item.ar" :key="index">{{ item1.name }}</span>
        </div>
      </div>
      <div class="itemRight">
        <svg class="icon bofang" aria-hidden="true" v-if="item.mv != 0">
          <use xlink:href="#icon-shipin"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-hanbaobao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { reqGetSearch } from '@/api/index.js'
export default {
  data() {
    return {
      keyWorldList: [],
      searchKey: '',
      searchList: []
    }
  },
  mounted() {
    this.keyWorldList = JSON.parse(localStorage.getItem('keyWorldList')) || []
  },
  methods: {
    async enterKey() {
      if (this.searchKey.trim()) {
        this.keyWorldList.unshift(this.searchKey)
        // 去重
        this.keyWorldList = [...new Set(this.keyWorldList)]
        // 限制长度
        if (this.keyWorldList.length > 10) {
          this.keyWorldList.pop()
        }
        localStorage.setItem('keyWorldList', JSON.stringify(this.keyWorldList))
        // 发起请求
        let res = await reqGetSearch(this.searchKey)
        if (res.data.code == 200) {
          this.searchList = res.data.result.songs
        }

        this.searchKey = ''
      }
    },
    deleteHistory() {
      localStorage.removeItem('keyWorldList')
      this.keyWorldList = []
    },
    // 点击历史搜索
    async searchHistory(item) {
      let res = await reqGetSearch(item)
      if (res.data.code == 200) {
        console.log(res)
        this.searchList = res.data.result.songs
      }
    },
    // 点击歌曲播放
    updateIndex(item) {
      this.$store.commit('pushPlayList', item)
      this.$store.commit('UPDATEPlayListIndex', this.$store.state.playList.length - 1)
    }
  }
}
</script>

<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 1rem;
  padding: 0 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.2rem;
    border: none;
    border-bottom: 1px solid #999;
    width: 90%;
    padding: 0.1rem;
  }
}
.searchHistory {
  width: 100%;
  padding: 0.2rem;
  position: relative;
  .sh_top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.1rem;
  }

  .icon {
    width: 0.3rem;
    height: 0.3rem;
  }
}
.itemList {
  width: 100%;
  padding: 0.2rem;
  .item {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemLeft {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .leftSpan {
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }
      div {
        p {
          width: 4.54rem;
          height: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
        margin-left: 0.3rem;
      }
    }
    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      position: relative;
      .icon {
        fill: #999;
      }
      .bofang {
        position: absolute;
        left: 0;
      }
      .liebiao {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>
