 var app = getApp();
 var util = require('../../../utils/util.js');
 Page({

   /**
    * 页面的初始数据
    */
   data: {
     category: "",
     movies:[],
     url:"",
     totalCount:0,
   },
   onScrollLower:function(event){
     //console.log(event)
     var url = this.data.url+"?start="+this.data.totalCount+"&count=20";
     util.http(url, this.processDoubanData);
     wx.showNavigationBarLoading();
   },
   /**
    * 生命周期函数--监听页面加载
    */
   onLoad: function(options) {
     //console.log(options);
     var category = options.category;
     
     switch (category) {
       case "正在热映":
         this.data.url = app.globalData.doubanBase + "/v2/movie/in_theaters";
         break;
       case "即将上映":
         this.data.url = app.globalData.doubanBase + "/v2/movie/coming_soon";
         break;
       case "豆瓣Top250":
         this.data.url = app.globalData.doubanBase + "/v2/movie/top250";
         break;
     }
     util.http(this.data.url, this.processDoubanData);
     wx.setNavigationBarTitle({
       title: category
     })

   },

   processDoubanData: function(data) {
       //console.log(data);return;
       this.data.totalCount += 20;
     var movies = [];
     for (var idx in data.subjects) {
       var subject = data.subjects[idx]; 
       var title = subject.title;
       if (title.length >= 6) {
         title = title.substring(0, 6) + "...";
       }
       // [1,1,1,1,1] [1,1,1,0,0]
       var temp = {
         stars: util.convertToStarsArray(subject.rating.stars),
         title: title,
         average: subject.rating.average,
         coverageUrl: subject.images.large,
         movieId: subject.id
       }
       movies.push(temp)
     } 
     this.setData({ movies:this.data.movies.concat(movies)}); 
     wx.hideNavigationBarLoading();

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

   },

   /**
    * 页面相关事件处理函数--监听用户下拉动作
    */
   onPullDownRefresh: function() {
        console.log("下拉了...");
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