//logs.js
// const util = require('../../utils/util.js')

import wxUtil from "../../utils/util.js";
console.log(wxUtil);

const app = getApp();

Page({
  data: {
    byQrcodeInto: false
  },

  onLoad: function (options) {
    this.test();
    console.log('onLoad');
  },

  onReady: function () {
    console.log('页面初次渲染完成！');
  },

  test: function () {
    console.log(this);
    console.log(123);
  },

  onShow: function ()  {
    console.log('onShow');
    if (wx.getStorageSync('byQrcodeIntoLog')) {
      this.setData({
        byQrcodeInto: true
      });
    } else {
      this.setData({
        byQrcodeInto: false
      });
    }

    wx.startPullDownRefresh({
      success: function (res) {
        console.log(res);
        setTimeout(function () {
          wx.stopPullDownRefresh();
        }, 3000);
      }
    });
  },

  onPullDownRefresh: function () {
    console.log('onPullDownRefresh-log');
  },

  onReachBottom: function () {
    console.log('onReachBottom-log');
  },

  toTest: function (e) {
    console.log(e);
    wx.navigateTo({
      url: '/pages/test/test'
    });
  }
})
