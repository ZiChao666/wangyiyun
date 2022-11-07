import requests from "./request";

// 获取轮播图banner列表
// banner?type=2
// export function reqBannerList(){
//   return requests({
//     method:"GET",
//     url:'/banner?type=2'
//   })
// }
export const reqBannerList = ()=>requests({url:'/banner?type=2',method:'get'})

// 获取好歌单
// export const reqGetGoodMusicList = ()=>requests({url:'/personalized?limit=10',method:'get'})
export function reqGetGoodMusicList(){
  return requests({
    method:"GET",
    url:'/personalized?limit=10'
  })
}

// 通过ID点击好歌单获取数据
// /playlist/detail?id=24381616
export const reqGetMusicDetail = (id)=>requests({url:`/playlist/detail?id=${id}`,method:'get'})