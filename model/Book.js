import { Http } from '../until/http-p.js'
import { config } from '../config.js'

class BookModel extends Http {
  getHotlist(){
    return this.request({
      url: config.hotlist,
      data:{
        name:'aa',
        age:12
      },
      method:'POST'
    })
  }
}
export { BookModel}