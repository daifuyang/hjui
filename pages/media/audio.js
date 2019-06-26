// pages/media/audio.js
let util = require('../../utils/util.js');
let audio = require('../../utils/audio.js');
let audioManage = null;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    audioList: [{
      name: "测试歌曲1",
      url: "http://qbonbon.qclub-online.com/mp3/1.m4a"
    }, {
      name: "测试歌曲2",
      url: "http://qbonbon.qclub-online.com/mp3/2.m4a"
    }, {
      name: "测试歌曲3",
      url: "http://qbonbon.qclub-online.com/mp3/3.m4a"
    }, ],
    audioControl: {
      percent: 0,
      start_time: '00:00',
      end_time: '00:00',
      index: 0,
      status: false
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.audioInit();
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  // 初始化音频方法
  audioInit: function() {
    var that = this;
    audioManage = audio.init(0);
    that.initPlayList();
    audioManage.onTimeUpdate(function () {
      console.log(111)
      var percent = audioManage.currentTime / audioManage.duration * 100;
      //console.log(percent);
      that.setData({
        "audioControl.percent": percent,
        "audioControl.start_time": util.formatSecond(audioManage.currentTime),
        "audioControl.end_time": util.formatSecond(audioManage.duration)
      })
    })
  },

  //播放音频方法
  play: function() {
    console.log(audioManage.paused);
    var status;
    if (audioManage.paused) {
      audio.play()
      status = true;
    } else {
      audio.pause();
      status = false;
    }
    this.setData({
      "audioControl.status": status
    })
  },

  // 暂停音频方法
  // pause: function() {
  //   audio.pause()
  // },

  //停止音频方法
  stop: function() {
    audio.stop()
    this.setData({
      "audioControl.status":false,
      "audioControl.percent": 0,
      "audioControl.start_time":"00:00",
      "audioControl.end_time": util.formatSecond(audioManage.duration)
    })
  },

  //跳转到指定位置
  seek: function() {
    audio.seek(20)
  },

  initPlayList: function() {
    var that = this;
    var index = this.data.audioControl.index;
    var url = this.data.audioList[index].url;
    audioManage.src = url
  },

  setPlayIndex: function(e) {
    this.setData({
      "audioControl.index": e.currentTarget.dataset.index,
    });
    this.initPlayList();
    this.play();
  },

  //上一首下一首
  changeIndexStep: function(e) {
    var that = this;
    var index = this.data.audioControl.index;
    var type = e.currentTarget.dataset.type;
    var allLen = this.data.audioList.length;
    switch (parseInt(type)) {
      case 0:
        if (index == 0) {
          index = allLen - 1;
        } else {
          index--;
        }
        that.setData({
          "audioControl.index": index,
        })
        that.initPlayList();
        that.play();
        break;
      case 1:

        if (index == allLen - 1) {
          index = 0
        } else {
          index++
        }

        that.setData({
          "audioControl.index": index,
        })
        that.initPlayList();
        that.play();
        break;
    }
  }

})