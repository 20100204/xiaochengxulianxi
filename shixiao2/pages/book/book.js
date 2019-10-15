
import {Book as BookMode} from "../../models/book.js";
import {LikeModel} from "../../models/like.js";
let BookModel = new BookMode();
let LModel = new LikeModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    classic: null,
    likeCount: 0,
    likeStatus: false,
    latest:true,
    first:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onlike:function(e){
   // console.log(e);
    LModel.like(e.detail.like,this.data.classic.id,this.data.classic.type);
  },
  onLoad: function (options) {
    BookModel.getLatest((res)=>{
      console.log(res);
      this.setData(
        {
          classic:res
        }
      );
    });
  },
  onLeft:function(event){
    this._updateClassic("next")
  },
  _updateClassic:function(upornext){
    BookModel.getData(this.data.classic.index, (res) => {
      //console.log(res);
      this.setData(
        {
          classic: res,
          latest: BookModel.isLatest(res.index),
          first: BookModel.isFirst(res.index)
        }
      );
    }, upornext)
  },
  onRight:function(event){
    this._updateClassic("previous")
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