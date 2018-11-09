import {Http} from '../until/http.js'
import { config } from '../config.js'

class ClassicModel extends  Http{
  getlastnew(sCallback){
    this.request({
      url: config.Claasic,
      success: (res) => {
        //将数据传入回调函数
        sCallback && sCallback(res)
        this._setLastnewindex(res.index)
        //将数据存入缓存
        wx.setStorageSync(this._getKey(res.index), res)
      }
    })
  }
  //获取翻页数据
  getdata(index,flag,sCallback){
    //组合点击事件发生时获取数据在缓存中的key
    let classickey = flag == 'next' ? this._getKey(index + 1) : this._getKey(index- 1)
    //在缓存中获取key对应的数据
    let classicdata = wx.getStorageSync(classickey)
    //缓存中不存在则访问API火炮去数据并将数据存储到缓存中
    if(!classicdata){
      this.request({
        url: 'classic/' + index + '/' + flag,
        // url:`classic/${index}/${flag}`,
        success: (res) => {
          //将数据存入缓存
          wx.setStorageSync(this._getKey(res.index), res)
          //将数据传入回调函数
          sCallback && sCallback(res)
        }
      })
    }else{
      //将缓存数据传入回调函数
      sCallback && sCallback(classicdata)
    }
  }
  /**
   * 将首次获取的存入缓存原来和获取到的上期、下期进行比较决定上下期下次是否可以点击
   */
  //是否第一期
  isFirst(index){
    return index==1 ?true :false;
  }
  //是否最后一期
  isLast(index) {
    return this._getLastnewindex() == index ? true : false;
  }
  _setLastnewindex(index){
    wx.setStorageSync('lastnewindex', index);
  }
  _getLastnewindex() {
   return wx.getStorageSync('lastnewindex');
  }
  /**
   * 将翻页后数据存入缓存
   */
  _getKey(index){
    return 'classic-'+index;
  }
}
export { ClassicModel}