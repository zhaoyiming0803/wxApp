const app = getApp();

Page({
  onShow () {
    if (!app.globalData.isLogin) {
      const isFromLogin = wx.getStorageSync('is_from_login');
      if (isFromLogin) {
        // 如果是从登录页返回的，这里可以自定义：跳转到首页或者是其他任何页面
        wx.switchTab({
          url: '/pages/index/index'
        });
      } else {
        wx.navigateTo({
          url: '/pages/login/login'
        });
      }
    } else {
      wx.showLoading({
        title: '加载中',
      });
      console.log('已登录，正常加载数据！！！');
    }
  }
});