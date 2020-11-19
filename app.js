App({
  globalData: {
    isLogin: false,
    share: false,  // 分享默认为false
    height: 0,
  },

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function (options) {
    console.log('进入了小程序onLaunch');

    // 判断是否由分享进入小程序
    if (options.scene == 1007 || options.scene == 1008) {
      this.globalData.share = true
    } else {
      this.globalData.share = false
    };
    //获取设备顶部窗口的高度（不同设备窗口高度不一样，根据这个来设置自定义导航栏的高度）
    //这个最初我是在组件中获取，但是出现了一个问题，当第一次进入小程序时导航栏会把
    //页面内容盖住一部分,当打开调试重新进入时就没有问题，这个问题弄得我是莫名其妙
    //虽然最后解决了，但是花费了不少时间
    wx.getSystemInfo({
      success: (res) => {
        this.globalData.height = res.statusBarHeight
      }
    })
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
              url: 'https://api.0351zhuangxiu.com/wxapp/shareTicket',
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
