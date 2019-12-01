App({
  globalData: {
    isLogin: false
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (e) {
    console.log('进入了小程序onLaunch');
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('进入了小程序onShow');
    console.log(options);
    wx.setStorageSync('byQrcodeIntoLog', options.scene === '1012');

    wx.getShareInfo({
      shareTicket: options.shareTicket,
      complete: (shareInfo) => {
        wx.login({
          success: (loginRes) => {
            console.log('shareInfo: ', shareInfo);
            console.log('loginRes: ', loginRes);
            wx.request({
              url: 'https://api.0351zhuangxiu.com/weapp/shareTicket',
              method: 'POST',
              data: {
                ...shareInfo,
                ...loginRes
              },
              dataType: 'json'
            })
          }
        })
      }
    })
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {

  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {

  },

  getUserInfo(userInfo) {
    wx.checkSession({
      success: (res) => {
        console.log(res);
        console.log(userInfo);
      },
      fail: (res) => {
        console.log(res);
        wx.login({
          success: (res) => {
            console.log(res);
            console.log(userInfo);
          }
        })
      }
    });
  }
})
