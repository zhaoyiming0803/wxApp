// require 暂时不支持绝对路径
// const wxUtil = require('../../utils/util.js');
// console.log(wxUtil);

// index.js
// 获取应用实例
const app = getApp();

Page({
	data: {
		motto: 'Hello World',
		userInfo: {},
		hasUserInfo: false,
		// canIUse: 判断小程序的API，回调，参数，组件等是否在当前版本可用。此接口从基础库 1.1.1 版本开始支持。
		// https://developers.weixin.qq.com/miniprogram/dev/api/api-caniuse.html
		canIUse: wx.canIUse('button.open-type.getUserInfo'),
		userList: [
			{ id: 1, uname: '张三', sex: 1 },
			{ id: 2, uname: '李四', sex: 1 },
			{ id: 3, uname: '王五', sex: 0 },
			{ id: 4, uname: '赵六', sex: 1 }
		],
		cameraContext: null
	},
	customData: {
		a: 1,
		b: 2
	},

	onLoad: function () {
		console.log('onLoad');
		this.test(); // 通过this调用当前组件内的方法
		if (app.globalData.userInfo) {
			this.setData({
				userInfo: app.globalData.userInfo,
				hasUserInfo: true
			})
		} else if (this.data.canIUse) {
			// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
			// 所以此处加入 callback 以防止这种情况
			app.userInfoReadyCallback = res => {
				this.setData({
					userInfo: res.userInfo,
					hasUserInfo: true
				})
			}
		} else {
			// 在没有 open-type=getUserInfo 版本的兼容处理
			wx.getUserInfo({
				success: res => {
					app.globalData.userInfo = res.userInfo
					this.setData({
						userInfo: res.userInfo,
						hasUserInfo: true
					})
				}
			})
		}

		/*try {
			this.data.cameraContext = wx.createCameraContext('myCamera');
			this.data.cameraContext.takePhoto();
		} catch (e) {
			wx.showModal({
				title: '提示',
				content: '微信版本过低，请升级后再使用照相机'
			});
		}

		this.mapCtx = wx.createMapContext('myMap');*/
	},

	onShow: function () {
		console.log('onShow');
	},

	onReady: function () {
		console.log('onReady');
		console.log(this.customData);
	},
	onShareAppMessage: function () {
		return {
			title: '转发标题',
			path: '/page/index?id=123'
		}
	},
	onReachBottom: (options) => {
		console.log(options); // 触底上拉调用
	},
	onPageScroll: (options) => {
		//console.log(options.scrollTop); // 只有一个scrollTop字段，表示滚动的距离
	},
	onShareAppMessage: function () {
		return {
			title: '自定义转发标题',
			path: '/page/user?id=123'
		}
	},
	showLogs: () => {
		console.log(app.globalData.num+=1);
		// wx.navigateTo 和 wx.redirectTo 不允许跳转到 tabbar 页面，只能用 wx.switchTab 跳转到 tabbar 页面
		// switchTab 跳转的必须是app.json中指定的tab路由
		wx.switchTab({
			url: '../../pages/logs/logs',
		})
	},
	// 事件处理函数
	bindViewTap: function (ev) {
		console.log(ev);
		console.log(this); // 获取到当前页面的对象(Page的实例化对象)，不是app小程序对象或其他事件对象
		console.log(getCurrentPages()); // 与this相同
	},
	// 根据map地图组件获取当前位置：
	getCenterLocation: function () {
		this.mapCtx.getCenterLocation({
			success: function (res) {
				console.log(res.longitude); // 纬度，范围为-90~90，负数表示南纬
				console.log(res.latitude); // 经度，范围为-180~180，负数表示西经
			}
		}),

		wx.getLocation({
			type: 'wgs84',
			success: function (res) {
				console.log(res);
				wx.openLocation({
					latitude: res.latitude,
					longitude: res.longitude,
					success: function (result) {
						console.log(result);
					}
				});
			}
		});
	},
	moveToLocation: function () {
		this.mapCtx.moveToLocation();
	},
	showWechat() {
		wx.request({
			method: 'POST',
			url: 'http://localhost:8080/globalCouponList/classifyList',
			dataType: 'json',
			success(res) {
				// console.log(res.data);
			},
			fail(res) {
				// console.log(res);
			}
		})
	},
	test () {
		console.log('this is a test function!');
	},
	getUserInfo: function (e) {
		console.log(e)
		app.globalData.userInfo = e.detail.userInfo
		this.setData({
			userInfo: e.detail.userInfo,
			hasUserInfo: true
		})
	},
	useCamera: function () {
		wx.scanCode({
			success: (res) => {
				console.log(res)
			}
		})
	}
})
