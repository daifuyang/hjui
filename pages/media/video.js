// pages/media/video.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    videoWidth:0,
    videoHeight:0,
    currentIndex:0,
    danmu_list:[
      {
        text: '第 1s 出现的弹幕',
        color: '#ff0000',
        time: 1
      },
      {
        text: '第 3s 出现的弹幕',
        color: '#ff00ff',
        time: 3
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initVideo();
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

  },
  //初始化视频播放器
  initVideo:function(){
    var width = wx.getSystemInfoSync().windowWidth;
    var height = width * 9 / 16;
    this.setData({
      videoWidth: width,
      videoHeight: height
    })
  },
  //点击事件
  setTab(e) {
    var that = this;
    var id = e.currentTarget.dataset.id;
    console.log(id);
    this.setData({
      'currentIndex': id
    });
  },
  swiperChange(e) {
    var that = this;
    var id = e.detail.current;
    this.setData({
      'currentIndex': id
    });
  }
})