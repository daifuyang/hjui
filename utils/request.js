const host = "https://api.benniaoyouji.com/";

const request = function (url,data = {}, method = "get",header={}){

  if (data.pageIndex == undefined){
    data.pageIndex = 1;
  }

  if (data.pageSize == undefined) {
    data.pageSize = 10;
  }

  let _url = url;
  if (url.indexOf('http://') != -1) {
    _url = url
  } else {
    _url = host + url
  }

  return new Promise( resolve => {
    wx.request({
      url: _url,
      data: data,
      method: method,
      success:(res) => {
        resolve(res)
      },
      error:(res) => {
        let title = '未知错误';
        if (res.errMsg == 'request:fail timeout') {
          title =  '网络连接超时，请刷新重试'
        } else {
          title = res.errMsg
        }
        wx.showToast({
          title: title,
        })
      }
    })
  })
}

module.exports = {
  request: request
}