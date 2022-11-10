<template>
  <PlayListTop :playlist="data.playlist"></PlayListTop>
  <SongsList :SongsList="data.SongsList" :shoucan="data.playlist.subscribedCount"></SongsList>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from '@vue/runtime-core'
import { reqGetMusicDetail, reqSongsList } from '@/api/index.js'
import PlayListTop from '@/components/PlayListDetail/PlayListTop'
import SongsList from '@/components/PlayListDetail/SongsList.vue'
export default {
  setup() {
    // 数据
    const data = reactive({
      playlist: {}, //歌单信息
      SongsList: [] //歌单歌曲
    })
    // 接收传来的ID
    onMounted(async () => {
      let id = useRoute().query.id
      // 获取歌单信息
      let res = await reqGetMusicDetail(id)
      if (res.data.code == 200) {
        data.playlist = res.data.playlist
      }
      let result = await reqSongsList(id)
      if (result.data.code == 200) {
        data.SongsList = result.data.songs || undefined
      }
      // 防止页面渲染了，但是数据丢失，所以把数据保存在本地存储中
      sessionStorage.setItem('itemDetail', JSON.stringify(data))
    })
    return { data }
  },
  // 注册组件
  components: {
    PlayListTop,
    SongsList
  }
}
</script>

<style></style>
