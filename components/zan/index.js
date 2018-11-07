// components/zan/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    like:{
      type:Boolean
    },
    count:{
      type:Number
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
  },
  /**
   * 生命周期函数
   */
  created:function(){

  },

  /**
   * 组件的方法列表
   */
  methods: {
    taplike: function (e) {
      let count = this.properties.like ? this.properties.count - 1 : this.properties.count + 1
      this.setData({
        like: !this.properties.like,
        count: count
      })
      //自定义事件
      let islike = this.properties.like ? 'like' : 'nolike'
      //指定事件名、detail对象
      this.triggerEvent('like', {
        islike: islike
      })
    }
  }
})
