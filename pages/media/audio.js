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
      status: true,
      seek:false //拖动中
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
    audioManage = audio.init(1);
    audioManage.autoplay = true;
    that.initPlayList();
    that.onTimeUpdate(); //可选监听进度条
    that.onNativeBtn(); //1：监听上下按钮
    that.onEnded();
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
    audio.seek(180)
  },

  //seekToValue拖动slider完成回调
  seekToValue:function(e){
    var percent = e.detail.value;
    var end = audioManage.duration;
    var num = end * percent * 0.01;
    audio.seek(num);
    this.setData({
      "audioControl.seek": false,
    })
  },

  //流畅拖动进度条
  noChangeValue:function(e){
    var percent = e.detail.value;
    //改变拖动状态
    this.setData({
      "audioControl.percent": percent,
      "audioControl.seek": true
    })
  },

  //每次切换初始化项目
  initPlayList: function() {
    var that = this;
    var index = this.data.audioControl.index;
    var url = this.data.audioList[index].url;
    audioManage.title = that.data.audioList[index].name
    audioManage.epname = that.data.audioList[index].name
    audioManage.singer = ''
    audioManage.src = url
    this.setData({
      "audioControl.status": true
    })
  },

  //点击播放
  setPlayIndex: function(e) {
    this.setData({
      "audioControl.index": e.currentTarget.dataset.index,
    });
    this.initPlayList();
    //this.play();
  },

  //设置当前音频的信息
  initAudioInfo:function(){
    
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
        //that.play();
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
        //that.play();
        break;
    }
  },
  //监听onTimeUpdate进度条
  onTimeUpdate:function(){
    var that = this;
    audioManage.onTimeUpdate(function () {
      var percent = audioManage.currentTime / audioManage.duration * 100;
      //console.log(percent);
      that.setData({
        "audioControl.start_time": util.formatSecond(audioManage.currentTime),
        "audioControl.end_time": util.formatSecond(audioManage.duration)
      })
      if(!that.data.audioControl.seek){
        that.setData(
          {
            "audioControl.percent": percent
          }
        )
      }
    })
  },

  //监听原生上一曲下一曲按钮
  onNativeBtn:function(){
   var that = this;
    audioManage.onNext(function(){
      var e = {
        currentTarget: {
          dataset: {
            type: 1
          }
        }
      }
      that.changeIndexStep(e);
    });
    audioManage.onPrev(function () {
      var e = {
        currentTarget: {
          dataset: {
            type: 0
          }
        }
      }
      that.changeIndexStep(e);
    });
  },

  //onEnded监听播放结束
  onEnded:function(){
    var that = this;
    console.log("onEnded:结束了");
    audioManage.onEnded(function(){
      var e = {
        currentTarget: {
          dataset: {
            type: 1
          }
        }
      }
      that.changeIndexStep(e);
    });
  }

})