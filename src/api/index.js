import requests from './request'

// 获取轮播图banner列表
// banner?type=2
// export function reqBannerList(){
//   return requests({
//     method:"GET",
//     url:'/banner?type=2'
//   })
// }
export const reqBannerList = () => requests({ url: '/banner?type=2', method: 'get' })

// 获取好歌单
// export const reqGetGoodMusicList = ()=>requests({url:'/personalized?limit=10',method:'get'})
export function reqGetGoodMusicList() {
  return requests({
    method: 'GET',
    url: '/personalized?limit=10'
  })
}

// 通过ID点击好歌单获取数据
// /playlist/detail?id=24381616
export const reqGetMusicDetail = (id) => requests({ url: `/playlist/detail?id=${id}`, method: 'get' })

// 获取歌单列表
// /playlist/track/all?id=24381616&limit=10&offset=1
export const reqSongsList = (id) => requests({ url: `/playlist/track/all?id=${id}&limit=20&offset=0`, method: 'get' })

// 获取歌词
// /lyric?id=33894312
export const reqGetLyric = (id) => requests({ url: `/lyric?id=${id}`, method: 'get' })

//搜索关键词
// /search?keywords=海阔天空
export const reqGetSearch = (keywords) => requests({ url: `/cloudsearch?keywords=${keywords}`, method: 'get' })

// 登录
// /login/cellphone?phone=${data.phone}&password=${data.password}
export const reqGetLogin = (data) => requests({ url: `/login/cellphone?phone=${data.phone}&password=${data.password}`, method: 'get' })

// 获取用户详情
// /user/detail?uid=32953014
export const reqGetUserInfo = (id) => requests({ url: `/user/detail?uid=${id}`, method: 'get' })
