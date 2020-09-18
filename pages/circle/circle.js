Page({
  data: { 
    
  },

  onReady () {
    wx.showLoading({ title: '加载中' });
    setTimeout(() => {
      const circle1 = this.selectComponent("#circle1");
      circle1.drawCircleBg('circle-bg1', 50, 8);
      this.countInterval(circle1, 'circle-draw1', 0.4);

      const circle2 = this.selectComponent("#circle2");
      circle2.drawCircleBg('circle-bg2', 50, 8);
      this.countInterval(circle2, 'circle-draw2', 0.9);

      const circle3 = this.selectComponent("#circle3");
      circle3.drawCircleBg('circle-bg3', 50, 8);
      this.countInterval(circle3, 'circle-draw3', 0.7);

      wx.hideLoading();
    }, 1000);
  },

  onShow () {
    wx.startPullDownRefresh()
  },

  countInterval (circle, circleDraw, scale) {
    let count = 0;
    const maxCount = 60;
    let countTimer = setInterval(() => {   
      if (count <= scale * maxCount) {  
        circle.drawCircle(circleDraw, 50, 8, count / maxCount);
        count += 1;
      } else {
        clearInterval(countTimer);
        countTimer = null;
      }
    }, 20);
  },
  
  _runEvent(e) {
     console.log('_runEvent', e);
     console.log(e.detail);
  },

  onPullDownRefresh (e) {
    console.log('onPullDownRefresh: ', e)
  }
})