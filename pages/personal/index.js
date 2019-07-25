// pages/personal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentIndex: 0,
    contentHeight: 0,
    contentStyle:''
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
  },

  init: function () {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        var clientHeight = parseInt(res.windowHeight);
        console.log(clientHeight);
        const query = wx.createSelectorQuery();
        query.select("#hj-head").boundingClientRect();
        query.exec((res) => {
          var headHeight = parseInt(res[0].height); // 获取list高度
          console.log(headHeight);
          const query = wx.createSelectorQuery();
          query.select("#hj-tab").boundingClientRect();
          query.exec((res) => {
            var tabHeight = parseInt(res[0].height);
            console.log(tabHeight);
            var contentHeight = clientHeight - headHeight - tabHeight;

            contentHeight = contentHeight - 22;

            console.log(contentHeight);

            var contentStyle = 'height:' + contentHeight+ 'px'

            that.setData({
              contentHeight: contentHeight,
              contentStyle: contentStyle
            })

          })

        })

      },
    })
  }
})