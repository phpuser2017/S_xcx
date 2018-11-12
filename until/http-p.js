import {config} from '../config.js'

const tipscode={
  1:'出现了一个错误',
  1005:'appkey无效'
}
class Http{
  //使用promise
  request({ url, method = 'GET', data = {}}){
    return new Promise((resolve,reject)=>{
      this._request(url, resolve, reject, method, data)
    })
  }
  // 必填参数 resolve, reject 需要在可选参数前面，放在可选参数后面可能会漏掉
  _request(url, resolve, reject, method="GET", data={}){
    wx.request({
      url: config.Baseurl+url,
      method:method,
      data:data,
      header:{
        'content-type':'application/json',
        'appkey': config.Appkey
      },
      success:(res)=>{
        const code=res.statusCode.toString()
        if(code.startsWith('4')){
          resolve(res.data)
        }else{
          reject()
          const errcode=res.data.error_code
          this._show_err(errcode)
        }
      },
      fail:(err) => {
        reject()
        this._show_err(1)
      }
    })
  }
  _show_err(errcode){
    if (!errcode){
      errcode=1
    }
    const tip = tipscode[errcode]
    wx.showToast({
      title:tip ? tip : tipscode[1],//没有错误码时直接返回第一个默认错误提示
      icon:'none',
      duration:2000
    })
  }
}
export{Http}