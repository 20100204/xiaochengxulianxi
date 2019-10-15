import {
  config as Config,
  fun1
} from "./config.js"
const tips = {
  1: "默认错误，抱歉出现了一个错误",
  1005: "appkey无效",
  3000: "期刊不存在",
  400:"bad request",
  2001:"You can not cancel because you did not like"
};
class Http {
  //url,data,method
  request(params) {
    if (!params.method) {
      params.method = "GET";
    }
    wx.request({
      url: Config.api_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': Config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          params.success&&params.success(res.data);
        } else {
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        this._show_error(1);
      }
    })
  }

  _show_error(error_code) {
    if (!error_code) {
      error_code = 1;
    }
    wx.showToast({
      title: tips.error_code,
      icon: "none",
      duration: 2000,
    })
  }
}

export {
  Http
}