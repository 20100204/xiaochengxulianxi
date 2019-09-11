// pages/posts/posts.js
var postData = require("../../data/posts.js");
 
Page({

  /**
   * 页面的初始数据
   */
  data: {
        datee:"Nov 8 2019"
  },
  /** 自定义属性 */
  data1:{
    date: "Nov 8 2018"
  },
  /*自定义函数*/
  process:function(){
   
  },
  onPostTap:function(event){
    var postId = event.currentTarget.dataset.postId; 
    wx.navigateTo({
      url: './detail/detail?id='+postId,
    })
     
  }
    ,
  onSwiperTap:function(event){
    var postId = event.target.dataset.postId;
    wx.navigateTo({
      url: './detail/detail?id=' + postId,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //  console.log("onload");
    this.setData({
      postList: postData.postList
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
   // console.log("onread");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
   // console.log("onshow");
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    //console.log("onhide");
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
   // console.log("onunload");
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    //console.log("onpulldownrefresh");
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    //console.log("onreachbottom");
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    //console.log("onshareappmessage");
  }
})