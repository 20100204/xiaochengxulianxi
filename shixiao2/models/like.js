import {Http} from "../Http.js";
import {config} from "../config.js";
class LikeModel extends Http {
 
  like (like,artId,category){
    let url = like == 'like' ?'like':'like/cancel'
    this.request({
      url:url,
      method:"POST",
      data:{
        art_id:artId,
        type:category
      }

    });
  }
} 
export {LikeModel}