import {config} from '../config.js'

const tipscode={
  1:'出现了一个错误',
  1005:'appkey无效'
}
class Http{
  request(params){
    if(!params.method){
      params.method='GET'
    }
    wx.request({
      url: config.Baseurl+params.url,
      method:params.method,
      data:params.data,
      header:{
        'content-type':'application/json',
        'appkey': config.Appkey
      },
      success:(res)=>{
        let code=res.statusCode.toString()
        if(code.startsWith('4')){
          //将数据传入回调函数
          params.success && params.success(res)
        }else{
          let errcode=res.data.error_code
          this._show_err(errcode)
        }
      },
      fail:(err) => {
        this._show_err(1)
      }
    })
  }
  _show_err(errcode){
    if (!errcode) {
      errcode = 1
    }
    const tip = tipscode[errcode]
    wx.showToast({
      title: tip ? tip : tipscode[1],//没有错误码时直接返回第一个默认错误提示
      icon: 'none',
      duration: 2000
    })
  }
}
export{Http}