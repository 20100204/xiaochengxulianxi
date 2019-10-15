// components/music/index.js
import { classBeh} from "../classic-beh.js";
const mMgr = wx.getBackgroundAudioManager();
Component({
  /**
   * 组件的属性列表
   */
  behaviors:[classBeh],
  properties: {
       musicSrc:String,
  },
  attached:function(event){
    this._recoverStatus();
    this._monitorSwitch();
  },
  detached:function(){

  },
  /**
   * 组件的初始数据
   */
  data: {
    pauseSrc:"./images/player@pause.png",
    playSrc:"./images/player@play.png",
    playing:false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
      onPlay:function(event){
            if(!this.data.playing){
              this.setData({
                playing: true,
              });
              mMgr.src = this.properties.musicSrc;
              mMgr.title = "ssss"
            }else{
              this.setData({
                playing: false,
              });
              mMgr.pause();
            }
          
      },
      _recoverStatus:function(){
          if(mMgr.paused){
              this.setData({
                playing:false,
              });
            return ;
          }
          if(this.properties.musicSrc == mMgr.src){
            this.setData({
              playing: true,
            });
            return;
          }

      },
    _monitorSwitch: function () {
      mMgr.onPause(() => {
        this._recoverStatus();
      });
    }
  },


})
