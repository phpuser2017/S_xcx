import { Http } from '../until/http.js'
import { config } from '../config.js'

class LikeModel extends Http {
  isliketap(params) {
    let url=params.islike=='like' ? config.like : config.nolike
    this.request({
      url: url,
      method:'POST',
      data:{
        art_id:params.artid,
        type: params.category
      }
    })
  }
  //获取当前期刊的喜欢信息（当前用户是喜欢还是不喜欢、总的喜欢人数）
  getNowLikestatus(params){
    this.request({
      url: 'classic/' + params.category + '/' +params.artid+'/favor',
      success:(res)=>{
        params.sCallback && params.sCallback(res)
      }
    })
  }
}
export { LikeModel }