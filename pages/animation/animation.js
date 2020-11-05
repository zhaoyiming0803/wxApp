// pages/animation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: false,
    animation: null,
    status: true
  },

  onLoad () {
    setTimeout(() => {
      this.setData({
        isShow: true
      }, 3000)
    })
  },

  onReady () {
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    this.animation = wx.createAnimation()
    this.animation.top(windowHeight * 0.5 - 85).left(windowWidth * 0.5 - 70).step({
      delay: 0,
      duration: 1000
    })
    this.setData({
      animation: this.animation.export()
    })
  },

  startAnimation () {
    const { windowWidth, windowHeight } = wx.getSystemInfoSync()
    this.animation.scale(0.3, 0.3).top(windowHeight - 140 * 0.7).left(-140 * 0.3).step({
      delay: 0,
      duration: 1000
    })
    this.setData({
      animation: this.animation.export()
    })
  }
})