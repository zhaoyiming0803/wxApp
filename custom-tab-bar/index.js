Component({
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#3cc51f",
    list: []
  },
  attached() {
    setTimeout(() => {
      this.setData({
        list: [{
          pagePath: "/pages/index/index",
          iconPath: "/image/icon_component.png",
          selectedIconPath: "/image/icon_component_HL.png",
          text: "组件1"
        }, {
          pagePath: "/pages/logs/logs",
          iconPath: "/image/icon_API.png",
          selectedIconPath: "/image/icon_API_HL.png",
          text: "接口2"
        }]
      })
    }, 2000)
  },
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({url})
      this.setData({
        selected: data.index
      })
    }
  }
})