// pages/movies/detail/detail.js
var app = getApp();
var util = require("../../../utils/util.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
      movie:{},
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     var url = app.globalData.doubanBase+"/v2/movie/subject/"+options.id
  util.http(url,this.processData);
  },
  processData:function(data){
    if(!data){
      return;
    }
     var director = {
       avatar:"",
       name:"",
       id:""
     };
     if(data.directors[0]!= null){
       if(data.directors[0].avatars!=null){
         director.avatar = data.directors[0].avatars.large;
       }
       director.name = data.directors[0].name;
       director.id = data.directors[0].id;
     }
     var movie = {
       movieImg:data.images.large?data.images.large:"",
       country:data.countries[0],
       title:data.title,
       originalTitle:data.original_title,
       wishCount:data.wish_count,
       commnetCount:data.comments_count,
       year:data.year,
       genres:data.genres.join("、"),
       stars:util.convertToStarsArray(data.rating.stars),
       score:data.rating.average,
       director:director,
       casts:util.convertToCastString(data.casts),
       castsInfo:util.convertToCastInfos(data.casts),
       summary:data.summary
     };
     this.setData({
       movie:movie,
     });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})