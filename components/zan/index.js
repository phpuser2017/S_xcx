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
   * 组件的方法列表
   */
  methods: {
    taplike:function(e){
      let count = this.properties.like ? this.properties.count - 1 : this.properties.count + 1
      this.setData({
        like: !this.properties.like,
        count: count
      })
    }
  }
})
