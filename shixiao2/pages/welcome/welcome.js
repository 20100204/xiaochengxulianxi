Page({

  onTap:function(v){
    //console.log("ontap");
    //console.log(v);
    // wx.navigateTo({
    //   url: '../posts/posts',
    //   success:function(){
    //       console.log("sucess");
    //   },
    //   fail:function(){
    //       console.log("fail");
    //   },
    //   complete:function(){
    //     console.log("complete");
    //   }
    // })
    wx.redirectTo({
      url: '../posts/posts',
      success: function () {
        console.log("sucess");
      },
      fail: function () {
        console.log("fail");
      },
      complete: function () {
        console.log("complete");
      }
    })
  },
  onUnload:function(){
      console.log("unload");
  },
  onHide:function(){
    console.log("onHide");
  }
})