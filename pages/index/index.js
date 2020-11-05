const app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgArr: [   'https://zhaoyiming-1254801202.cos.ap-beijing.myqcloud.com/WechatIMG37.jpeg'
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    return
    setTimeout(() => {
      const val = wx.pageScrollTo({
        scrollTop: 0,
        // selector: '#selector',
        duration: 1000,
        complete: function (e) {
          console.log('page scroll: ', e)
        }
      })
      console.log('valllll: ', val)
    }, 3000)
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
    console.log('onShow');
    
    wx.setStorageSync('is_from_login', false);
return
    wx.startPullDownRefresh({
      success: function (res) {
        console.log(res);
        setTimeout(function () {
          wx.stopPullDownRefresh();
        }, 2000);
      }
    });

    wx.showShareMenu({
      withShareTicket: true
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   * 当navigateTo或底部tab切换时调用
   */
  onHide: function () {
    console.log('导航到其他page货切换了tab');
  },

  /**
   * 生命周期函数--监听页面卸载
   * 当redirectTo或navigateBack的时候调用
   */
  onUnload: function () {
    console.log('重定向或返回了');
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log('onPullDownRefresh');
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('onReachBottom');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
   
  },

  toLogin (userInfo) {
    app.getUserInfo(userInfo);
  },

  previewImg: function (e) {
    console.log(e.currentTarget.dataset.index);
    var index = e.currentTarget.dataset.index;
    var imgArr = this.data.imgArr;
    wx.previewImage({
      current: imgArr[index],     //当前图片地址
      urls: imgArr,               //所有要预览的图片的地址集合 数组形式
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  pullDown () {
    wx.startPullDownRefresh({
      success: (res) => {},
    })

    setTimeout(() => {
      wx.stopPullDownRefresh({
        success: (res) => {},
      })
    }, 2000)
  },

  onPageScroll (e) {
    console.log(e)
  },

  navigateToMiniProgram () {
    wx.navigateToMiniProgram({
      appId: 'xxxx',
      path: 'pages/index/index'
    })
  },

  navigateToAnimation () {
    wx.navigateTo({
      url: '/pages/animation/animation',
    })
  }
})