import {Http} from "../Http.js";
class Book extends Http{
  getLatest(sCallBack){
    this.request({
      url:"classic/latest",
      success:(res)=>{
        sCallBack(res);
        this._setLatestIndex(res.index);
      }
    });
  }
  getData(index,sCallback,lu){
    this.request({
      url:`classic/${index}/${lu}`,
      success:(res)=>{
        sCallback(res)
      }
    })
  }
  isFirst(index){
    return index ==1?true:false;
  }
  isLatest(index){
   let latestIndex = this._getLatestIndex();
   return index ==latestIndex?true:false;
  }
  _setLatestIndex(index){
    wx.setStorageSync('latest', index)
  }
  _getLatestIndex(){
    let index = wx.getStorageSync("latest") 
    return index;
  }
}
export {Book}