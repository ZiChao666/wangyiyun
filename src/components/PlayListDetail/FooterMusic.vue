<template>
  <div class="FooterMusic">
    <div class="footerLeft" @click="UPDATElyricShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首哦</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon bofan" aria-hidden="true" @click="play" v-if="isBtnShow">
        <use xlink:href="#icon-24gl-playCircle"></use>
      </svg>
      <svg class="icon bofan" aria-hidden="true" @click="play" v-else>
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon liebiao" aria-hidden="true">
        <use xlink:href="#icon-duoxuankuang"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  </div>
  <van-popup v-model:show="lyricShow" position="right" :style="{ height: '100%', width: '100%' }" v-if="lyricShow">
    <MusicDetail :musicList="playList[playListIndex]" :isBtnShow="isBtnShow" :play="play" :addDuration="addDuration"></MusicDetail>
  </van-popup>
</template>
<script>
import MusicDetail from './MusicDetail.vue'
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {
      interVal: 0
    }
  },
  computed: {
    ...mapState(['playList', 'playListIndex', 'isBtnShow', 'lyricShow'])
  },
  mounted() {
    console.log(this.$refs)
    this.$store.dispatch('getLyric', this.playList[this.playListIndex].id)
  },
  updated() {
    this.$store.dispatch('getLyric', this.playList[this.playListIndex].id)
    this.addDuration()
  },
  methods: {
    play() {
      if (this.$refs.audio.paused) {
        this.$refs.audio.play()
        this.UPDETEISBTNSHOW(false)
        this.updateTime()
      } else {
        this.$refs.audio.pause()
        this.UPDETEISBTNSHOW(true)
        clearInterval(this.interVal)
      }
    },
    ...mapMutations(['UPDETEISBTNSHOW', 'UPDATElyricShow', 'updateCurrentTime', 'updateDuration']),
    updateTime() {
      this.interVal = setInterval(() => {
        this.updateCurrentTime(this.$refs.audio.currentTime)
      }, 500)
    },
    addDuration() {
      this.updateDuration(this.$refs.audio.duration)
    }
  },
  watch: {
    // 点击歌曲立即播放
    playListIndex() {
      this.$refs.audio.autoplay = true
      if (this.$refs.audio.paused) {
        this.UPDETEISBTNSHOW(false)
      }
    },
    playList() {
      if (this.isbtnShow) {
        this.$refs.audio.autoplay = true
        this.updateIsbtnShow(false)
      }
    }
  },
  components: {
    MusicDetail
  }
}
</script>
<style lang="less" scoped>
.FooterMusic {
  width: 100%;
  height: 1.4rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  border-top: 1px solid #999;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 60%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      width: 1rem;
      height: 1rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
    .bofan {
      stroke: #333333;
      stroke-width: 20;
      margin-right: 0.2rem;
    }
  }
}
</style>
