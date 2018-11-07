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
        type:params.catgory
      }
    })
  }
}
export { LikeModel }