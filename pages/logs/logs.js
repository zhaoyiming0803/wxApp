//logs.js
// const util = require('../../utils/util.js')

import wxUtil from "../../utils/util.js";
console.log(wxUtil);

const app = getApp();

Page({
  data: {
    byQrcodeInto: false
  },

  onLoad: (options) => {
		
  },

  onShow: function ()  {
    console.log(this);
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
  }
})
