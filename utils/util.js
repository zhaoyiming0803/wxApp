const wxUtil = {
	test: (uname) => {
		wx.showModal({
			title: '你的名字是：',
			content: uname
		})
	}
};

module.exports = wxUtil;