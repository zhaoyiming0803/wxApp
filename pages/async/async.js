// pages/async/async.js

async function layout () {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('hello layout')
    }, 2000)
  })
}

class Login {
  async isLogin() {	
		return this._checkIsLogin()	
  }
  async _checkIsLogin () {
    return layout()
  }
}

const login = new Login()


function func1 () {
  return Promise.resolve()
}

async function func2 () {
  await func1()
  console.log(123)
  Promise.resolve().then(() => {
    console.log(321)
  })
}

func2()

setTimeout(() => {
  func2()
}, 1000)


Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // onLoad: function (options) {
  //   this.onClick()
  //   setTimeout(() => {
  //     this.onClick()
  //   }, 1000)
  // },

  // onClick: async function () {
  //   await this.getUserInfo()
  //   console.log(123)
  //   Promise.resolve().then(() => {
  //     console.log(321)
  //   })
  // },

  // getUserInfo: function () {
  //   return Promise.resolve()
  // },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})