// components/classic/music/index.js
import { commonbeh } from '../common-behavior.js'
const Mobj=wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [commonbeh],
  properties: {
    src:{
      type: String,
      value: 'http://m10.music.126.net/20181112121127/e3da026dd1927da16b65aa2293b9c563/ymusic/fa90/df9c/59f7/95c4a2802e0b9191ae1a048f127e53c5.mp3'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    backpic:'../../images/music@pic.png',
    stauspic:'../../images/player@playing.png',
    waitpic: '../../images/player@waitting.png',
    text:'音乐音乐音乐音乐音乐音乐',
    playing: false
  },
  //组件实例进入页面节点树时执行
  attached:function(e){
    //判断播放歌曲是否为当前组件的歌曲对页面播放按钮判断显示
    this._changeStatus()
    //控制器事件监听
    this._panelStatus()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    //点击播放、暂停音乐
    plaimusic:function(e){
      if(!this.data.playing){
        //播放
        this.setData({
          playing: true
        })
        Mobj.src = this.properties.src
      }else{
        //暂停
        this.setData({
          playing: false
        })
        Mobj.pause()
      }
    },
    //改变歌曲按钮状态
    _changeStatus:function(){
      //判断当前歌曲暂停时显示播放按钮
      if(Mobj.paused){
        this.setData({
          playing:false
        })
        return
      }
      //判断当前歌曲是否为当前组件的歌曲，是的话显示暂停按钮
      if(Mobj.src==this.properties.src){
        this.setData({
          playing: true
        })
      }
    },
    //歌曲播放面板的控制
    _panelStatus:function(){
      //监听背景音频播放事件
      Mobj.onPlay(()=>{
        this._changeStatus()
      })
      //监听背景音频暂停事件
      Mobj.onPause(() => {
        this._changeStatus()
      })
      //监听背景音频自然播放结束事件
      Mobj.onEnded(() => {
        this._changeStatus()
      })
      //监听背景音频停止事件
      Mobj.onStop(() => {
        this._changeStatus()
      })
    }
  }
})
