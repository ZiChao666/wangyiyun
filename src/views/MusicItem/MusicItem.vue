<template>
  <PlayListTop :playlist="data.playlist"></PlayListTop>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted, reactive } from '@vue/runtime-core'
import { reqGetMusicDetail } from '@/api/index.js'
import PlayListTop from '@/components/PlayListDetail/PlayListTop'
export default {
  setup() {
    // 数据
    const data = reactive({
      playlist: {}
    })
    // 接收传来的ID
    onMounted(async () => {
      let id = useRoute().query.id
      // 发起请求
      let res = await reqGetMusicDetail(id)
      if (res.data.code == 200) {
        data.playlist = res.data.playlist
      }
    })
    return { data }
  },
  // 注册组件
  components: {
    PlayListTop
  }
}
</script>

<style></style>
