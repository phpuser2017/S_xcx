// pages/index/index.js
import {ClassicModel} from '../../model/Claasic.js'
let classicmodel = new ClassicModel()
import { LikeModel } from '../../model/Like.js'
let likemodel = new LikeModel()
Page({
  data: {
    count:33,
    islike:false,
    moviepic:'../../images/movie1@2x.png',
    text:'饮食男女饮食男女饮食男女饮食男女',
    title:'张三',
    pre:true,
    next:false
  },
  onLoad: function (options) {
    classicmodel.getlastnew((res)=>{
      console.log(res)
    })
  },
  tapzan:function(e){
    let islike=e.detail.islike
    likemodel.isliketap({
      islike:islike,
      artid:33,
      catgory:100
    })
  },
  navpre: function (e) {
    console.log(e)
  },
  navnext: function (e) {
    console.log(e)
  }
})