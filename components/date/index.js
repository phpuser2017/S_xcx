// components/classic/date/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    montharr:[
      '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'
    ],
    _index:'02'
  },
  //组件实例进入页面节点树
  attached:function(){
    let date=new Date(),
        month=date.getMonth(),
        year=date.getFullYear();
    this.setData({
      year:year,
      month:this.data.montharr[month]
    })
    
  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
