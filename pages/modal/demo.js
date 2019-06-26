// pages/modal/demo.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalShareFlag:false 
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  // stopAction禁止往下活动
  stopAction:function(e){
    return false;
  },
  //关闭弹窗方法
  closeBtn:function(e){
    this.setData({
      modalShareFlag:false
    })
  },
  //打开弹框方法
  openModal:function(e){
    this.setData({
      modalShareFlag: true
    })
  }
})