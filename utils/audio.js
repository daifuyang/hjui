let audioManage = null;
let audioType = 0;
const init = function (type = 0) {

  switch (parseInt(type))
  {
    case 0:
      audioType = 0;
      audioManage = wx.createInnerAudioContext();
      //audioManage.autoplay = true;
      return audioManage;
      break;
    case 1:
      audioType = 1;
      audioManage = wx.getBackgroundAudioManager();
      return audioManage;
      break;
  }

}
//播放音频
const play = function(){
  console.log("audioType:" + audioType, audioManage);
  if (audioManage != null){
    switch (parseInt(audioType)) {
      case 0:
        audioManage.play();
        break;
      case 1:
      
        break;
    } 
  }
}

//暂停音频
const pause = function () {
  console.log("audioType:" + audioType);
  if (audioManage != null) {
    switch (parseInt(audioType)) {
      case 0:
        audioManage.pause();
        break;
      case 1:
        break;
    }
  }
}

//停止播放
const stop = function () {
  console.log("audioType:" + audioType);
  if (audioManage != null) {
    switch (parseInt(audioType)) {
      case 0:
        audioManage.stop();
        break;
      case 1:
        break;
    }
  }
}

//跳转到指定位置
const seek = function(num){
  console.log("audioType:" + audioType, "跳转位置：" + num + "--音频长度：" + audioManage.duration);
  if (audioManage != null) {
    //检测当前音频是否在播放
    if (audioManage.paused) {
      audioManage.play();
    }

    //跳转长度不能超过边界
    if (num <= 0) {
      num = 0
    }

    console.log(audioManage.duration > 0)
    if (audioManage.duration > 0 && num >= audioManage.duration) {
      num = audioManage.duration
    }

    audioManage.seek(num);

  }
}

const status = function(){
  console.log(audioType,audioManage);
}

module.exports = {
  init: init,
  status: status,
  play:play,
  pause: pause,
  stop:stop,
  seek: seek
}