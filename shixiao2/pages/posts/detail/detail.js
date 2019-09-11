// pages/posts/detail/detail.js
var postsData = require("../../../data/posts.js");
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    postData: {},
    collected: false,
    id: "",
    play: false,
  },
  onMusicTap: function(event) {
    const backgroundAudioManager = wx.getBackgroundAudioManager()


    if (this.data.play) {
      this.setData({
        play: false
      });
      backgroundAudioManager.pause()
      app.globalData.is_playing = false;

    } else {
      this.setData({
        play: true
      });
      app.globalData.is_playing = true;
      backgroundAudioManager.title = (postsData.postList)[this.data.id].music.title;
      backgroundAudioManager.epname = (postsData.postList)[this.data.id].music.title;
      backgroundAudioManager.singer = (postsData.postList)[this.data.id].music.title;
      backgroundAudioManager.coverImgUrl = (postsData.postList)[this.data.id].music.coverImg;
      // 设置了 src 之后会自动播放
      backgroundAudioManager.src = (postsData.postList)[this.data.id].music.url;
    }



    //  backgroundAudioManager.play();
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    var postsCollected = wx.getStorageSync("postsCollected");
    var postData = postsData.postList[options.id];

    if (!postsCollected) {
      var postsCollected = {};
      postsCollected[options.id] = false;
      wx.setStorageSync("postsCollected", postsCollected);
    } else {

    }
    this.data.id = options.id;
    this.setData({
      postData: (postsData.postList)[options.id],
      collected: postsCollected[options.id],
      play: app.globalData.is_playing,
    });
    // wx.setStorageSync("key", "暴风英雄")

  },
  onCollectionTap: function(event) {
    //console.log(wx.getStorageSync("key"));
    this.showModal(this);





  },
  showToast: function() {
    wx.showToast({
      title: this.data.collected ? "收藏成功" : "取消成功",
    })
  },
  showModal: function(_this) {
    wx.showModal({
      title: '收藏',

      content: _this.data.collected ? "取消收藏" : "确认收藏",

      success(res) {

        if (res.confirm) {
          // console.log('用户点击确定')
          var postsCollected = wx.getStorageSync("postsCollected");
          postsCollected[_this.data.id] = !postsCollected[_this.data.id];
          wx.setStorageSync("postsCollected", postsCollected);
          _this.setData({
            collected: postsCollected[_this.data.id]
          });
          wx.showToast({
            title: _this.data.collected ? "收藏成功" : "取消成功",
          })
        } else if (res.cancel) {
          //console.log('用户点击取消')
        }
      }
    })
  },
  onShareTap: function(event) {
    wx.showActionSheet({
      itemList: ['分享到微信', '分享到qq', '分享到微博'],
      itemColor: "#405f80",
      success(res) {
        console.log(res.tapIndex)
        console.log(res)
      },
      fail(res) {
        console.log(res.errMsg)
      }
    })

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {
    wx.getBackgroundAudioManager().stop();
    app.globalData.is_playing = false;
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})