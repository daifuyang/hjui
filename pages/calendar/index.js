// pages/calendar/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    year: "0000",
    month: "00",
    weekStr: ["日", "一", "二", "三", "四", "五", "六"],
    days: [],
    first_week: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.init();
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
  init: function () {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();

    // 这个月一号星期几
    var week = new Date(year, month, 1).getDay();
    // 这个月一共多少天
    var days = new Date(year, month + 1, 0).getDate();

    var dayArr = [];
    //这个月的长度
    var length = Math.ceil(days / 7);

    var day = 1;
    for (var i = 0; i < days + week; i++) {
      if (i == 0 && i < week) {
        dayArr.push('');
      }
      else {
        dayArr.push(day);
        day++;
      }
    }

    console.log(dayArr);

    this.setData({
      year: year,
      month: month + 1,
      first_week: week,
      dayArr: dayArr
    })
  }
})