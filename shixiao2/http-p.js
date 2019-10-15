import {
  config as Config,
  fun1
} from "./config.js"
const tips = {
  1: "默认错误，抱歉出现了一个错误",
  1005: "appkey无效",
  3000: "期刊不存在",
  400: "bad request",
  2001: "You can not cancel because you did not like"
};
class Http {
  request({url, data = {}, method = "GET"}) {
    return new Promise((resole, reject) => {
        this._request(url,resole,reject,data,method);
    });
  }

  _request(url, resolve, reject, data = {}, method = "GET") {
    wx.request({
      url: Config.api_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': Config.appkey
      },
      success: (res) => {
        let code = res.statusCode.toString();
        if (code.startsWith('2')) {
          resolve(res.data)
        } else {
          reject();
          let error_code = res.data.error_code;
          this._show_error(error_code);
        }
      },
      fail: (err) => {
        reject();
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