//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  

  onLoad: function () {
    
  },

  //事件监听
  openView:function(e){
    var name = e.currentTarget.dataset.name;
    wx.navigateTo({
      url: '../'+name,
    })
  }
})
