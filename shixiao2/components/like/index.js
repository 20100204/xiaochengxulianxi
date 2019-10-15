// components/like/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      like:{
        type:Boolean,
        value:false,
        observer:function(){

        }

      },
      count:{
        type:Number,
      }
  },

  /**
   * 组件的初始数据
   */
  data: {
    yesSrc:"./images/like.png",
    noSrc:"./images/like@dis.png",
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLikeHandler:function(event){
       let like = this.properties.like;
       let count = this.properties.count;
       count = like ?count-1:count+1;
       this.setData({
         like :!like,
         count:count
       });
        //console.log(event);
      this.triggerEvent('like', {
       "like":like
      },{} )
  
  }
}
})
