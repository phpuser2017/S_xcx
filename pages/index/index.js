// pages/index/index.js
import {ClassicModel} from '../../model/Claasic.js'
let classicmodel = new ClassicModel()
import { LikeModel } from '../../model/Like.js'
let likemodel = new LikeModel()
Page({
  data: {
    likeCount:0,//喜欢数量
    likeStatus:false,//喜欢状态
    count:33,
    islike:false,
    moviepic:'../../images/movie1@2x.png',
    text:'饮食男女饮食男女饮食男女饮食男女',
    title:'张三',
    pre:true,
    next:false,
    hideenmovie:false,
    hideenmusic:true,
    hideensentence: true
  },
  onLoad: function (options) {
    classicmodel.getlastnew((res)=>{
      this.setData({
        classic:res,
        likeCount: res.fav_nums,
        likeStatus: res.fav_status
      })
    })
  },
  tapzan:function(e){
    let islike=e.detail.islike
    likemodel.isliketap({
      islike:islike,
      artid:33,
      category:100
    })
  },
  //翻页
  navpre: function (e) {
    this._nav('previous')
    this.setData({
      hideenmovie: true,
      hideenmusic: false,
      hideensentence: true
    })
  },
  navnext: function (e) {
    this.setData({
      hideenmovie: true,
      hideenmusic: true,
      hideensentence: false,
      senpic: '../../images/ju.jpg',
      text: '句子这句子句子这句子句子这句子句子这句子'
    })
    this._nav('next')
  },
  _nav:function(flag){
    let index=this.data.classic.index
    classicmodel.getdata(index,flag, (res) => {
      //获取喜欢的数据
      this._getLikestatus(res.id,res.type)
      //翻页后赋值数据
      this.setData({
        classic: res,
        pre: classicmodel.isFirst(res.index),
        next: classicmodel.isLast(res.index)
      })
    })
  },
  //获取喜欢数据
  _getLikestatus: function (artid, category){
    likemodel.getNowLikestatus({
      artid: artid,
      category: category
    },(res)=>{
      this.setData({
        likeCount:res.fav_nums,
        likeStatus: res.fav_status
      })
    })
  },
  onShow:function(){

  }
})