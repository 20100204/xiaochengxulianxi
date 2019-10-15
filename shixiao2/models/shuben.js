import {
Http
} from "../http-p.js";

class Shuben extends Http {
  getHotList() {
    return this.request({
      url: "book/hot_list"
    });
  }
  getDetail(bid){
    return this.request({
      url:`book/${bid}/detail`
    });
  }
  getLikeStatus(bid){
    return this.request({
      url:`book/${bid}/favor`
    });
  }
  getComments(bid){
    return this.request({
      url:`book/${bid}/short_comment`
    });
  }
}
export {Shuben}