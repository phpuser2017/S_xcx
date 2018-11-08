// components/classic/nav/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:String,
    pre:Boolean,
    next:Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    prepic:'../images/triangle@left.png',
    disprepic: '../images/triangle.dis@left.png',
    nextpic: '../images/triangle@right.png',
    disnextpic: '../images/triangle.dis@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    tappre:function(){
      //如果不是第一期才会让上一个可以点击
      if(!this.properties.pre){
        this.triggerEvent('pre', {
          tap: 'left'
        })
      }
      
    },
    tapnext: function () {
      if (!this.properties.next) {
        this.triggerEvent('next', {
          tap: 'right'
        })
      }
    },
  }
})
