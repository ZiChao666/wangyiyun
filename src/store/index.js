import { createStore } from 'vuex'
import { reqGetLyric, reqGetLogin } from '@/api/index.js'
export default createStore({
  state: {
    playList: [
      {
        name: '孤勇者',
        al: {
          id: 137142551,
          name: '孤勇者',
          pic: 109951166702962260,
          picUrl: 'https://p2.music.126.net/aG5zqxkBRfLiV7A8W0iwgA==/109951166702962263.jpg',
          pic_str: '109951166702962263'
        },
        id: 1901371647,
        ar: [{ name: '陈奕迅' }]
      }
    ],
    playListIndex: 0,
    isBtnShow: true, //播放暂停切换
    lyricShow: false, //切换歌词页面
    lrcList: {}, // 存储歌词
    currentTime: 0, //当前时间
    duration: 0, //歌曲时间总时长
    isLogin: false,
    isFooterMusic: true,
    token: '',
    user: {}
  },
  getters: {},
  mutations: {
    UPDETEISBTNSHOW(state, value) {
      state.isBtnShow = value
    },
    UPDATEPlayList(state, value) {
      state.playList = value
      console.log(state.playList)
    },
    UPDATEPlayListIndex(state, value) {
      state.playListIndex = value
    },
    UPDATElyricShow(state) {
      state.lyricShow = !state.lyricShow
    },
    // 获取歌词
    GETLYRIC(state, lrc) {
      state.lrcList = lrc
    },
    // 修改歌词当前时间
    updateCurrentTime(state, value) {
      // console.log(state.currentTime)
      state.currentTime = value
    },
    // 修改歌曲时间总时长
    updateDuration(state, value) {
      state.duration = value
    },
    pushPlayList(state, value) {
      state.playList.push(value)
    },
    updateToken(state, value) {
      state.token = value
      localStorage.setItem('token', state.token)
    },
    updateIsLogin(state, value) {
      state.isLogin = true
    },
    updateUser(state, value) {
      state.user = value
    }
  },
  actions: {
    async getLyric({ commit }, id) {
      let res = await reqGetLyric(id)
      if (res.data.code == 200) {
        commit('GETLYRIC', res.data.lrc)
      }
    },
    async getLogin(context, value) {
      let res = await reqGetLogin(value)
      return res
    }
  },
  modules: {}
})
