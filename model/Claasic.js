import {Http} from '../until/http.js'
import { config } from '../config.js'

class ClassicModel extends  Http{
  getlastnew(sCallback){
    this.request({
      url: config.Claasic,
      success: (res) => {
        //将数据传入回调函数
        sCallback && sCallback(res)
      }
    })
  }
}
export { ClassicModel}