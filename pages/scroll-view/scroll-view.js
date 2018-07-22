const app = getApp();
let timer = null;

Page({
  data: {
    scrollTop: 100,
    toView: 'green',
    list: [],
    thisTab: 'green'
  },

  onLoad: function () {
    this.loadData();
  },

  onShow: function () {
    
  },

  loadData: function () {
    const list = [
      {
        color: 'green',
        arr: [1, 2, 3, 4, 5]
      },
      {
        color: 'red',
        arr: [1]
      },
      {
        color: 'yellow',
        arr: [1, 2, 3]
      },
      {
        color: 'blue',
        arr: [1, 2]
      }
    ];
    this.formatList(list); // 异步获取数据的时候要放在回调内
  },

  formatList: function (list) {
    for (var i = 0; i < list.length; i += 1) {
      var cur = list[i];
      cur.height = 50 * cur.arr.length;
      list[i].range = i === 0
        ? [0, list[0].height]
        : [list[i-1].range[1], list[i-1].range[1] + list[i].height];
    }
    this.setData({
      list
    });
  },

  upper: function (e) {
    console.log(e);
    console.log('到最顶部了');
  },

  lower: function (e) {
    console.log(e);
    console.log('到最底部了');
  },

  scroll: function (e) {
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      console.log('开始匹配');
      var scrollTop = e.detail.scrollTop;
      var deltaY = e.detail.deltaY;
      this.matchThisTab(scrollTop, deltaY);
    }, 300);
  },

  scrollTop: function () {
    
  },

  scrollToView: function (e) {
    console.log(e);
    var color = e.currentTarget.dataset.color;
    this.setData({
      toView: color,
      thisTab: color
    });
  },

  matchThisTab: function (scrollTop, deltaY) {
    for (var i = 0; i < this.data.list.length; i += 1) {
      if (scrollTop > this.data.list[i].range[0]  && scrollTop < this.data.list[i].range[1]) {
        this.setData({
          thisTab: this.data.list[i].color
        });
        break;
      }
    }
  }

});