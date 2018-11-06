// pages/index/index.js
import {config} from '../../config.js'
import {Http} from '../../until/http.js'
let http = new Http()
Page({
  data: {
    count:33,
    islike:false
  },
  onLoad: function (options) {
    http.request({
      url: config.Claasic,
      success:(res)=>{
        console.log(res)
      }
    })
  },
})