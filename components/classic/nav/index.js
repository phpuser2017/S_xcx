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
    pre:'../../images/triangle@left.png',
    dispre: '../../images/triangle.dis@left.png',
    next: '../../images/triangle@right.png',
    disnext: '../../images/triangle.dis@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
