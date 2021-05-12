// pages/progress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    countTimer: null, // 设置 定时器 初始为null
    angle: 360,
    width: 220,
    height: 220,
    radius: 100,
    timerType: 1, // 1：倒计时 2：正计时
    ratio: 0,
    abc: getApp().abc
  },

  onReady: function () {
    this.countInterval()

    console.log('--------------: ', getApp().abc)
  },

  onHide: function () {
    clearInterval(this.countTimer);
  },

  toHome () {
    wx.reLaunch({
      url: '/pages/progress/progress'
    })
  },

  countInterval: function () {
    setTimeout(() => {
      this.countTimer = setInterval(() => {
        if (this.data.ratio <= 1) {
          if (this.data.timerType === 2) {
            this.drawCircle( (this.data.ratio))
            this.drawSpot(-this.data.ratio)
          } else {
            this.drawCircle( (-this.data.ratio))
            this.drawSpot(this.data.ratio)
          }
          this.data.ratio += 0.01
        } else {
          this.setData({
            progress_txt: "匹配成功"
          });
          clearInterval(this.countTimer);
        }
      }, 100) 
    }, 1000)
  },

  drawSpot (step) {
    const context = wx.createCanvasContext('canvasSpot')
    context.save();
    context.clearRect(0, 0, this.data.width, this.data.height);

    // 小球的运动轨迹
    // this.drawEmptyCircle(context, this.data.width/2, this.data.height/2, this.data.radius,'red');
    
    context.translate(this.data.width/2, this.data.height/2); 
    context.rotate(-Math.PI / 180 * (this.data.angle * step));

    context.fillStyle = '#FF5E0B';
    context.beginPath();
    context.arc(0, -this.data.radius, 6, 0, Math.PI * 2, false);
    context.closePath();
    context.fill();
    context.restore();

    context.draw()
  },

  drawEmptyCircle (context, x,y,radius,color) {
    context.save();
    context.strokeStyle = color;
    context.beginPath();
    context.arc(x,y,radius,0,Math.PI * 2);
    context.closePath();
    context.stroke();
    context.restore();    
  },

  drawCircle: function (step) {
    const context = wx.createCanvasContext('canvasProgress')
  
    // 设置渐变 // 安卓版微信上无效
    // var gradient = context.createLinearGradient(200, 100, 100, 200);
    // gradient.addColorStop("0", "#FF5E0B");
    // gradient.addColorStop("0.5", "#40ED94");
    // gradient.addColorStop("1.0", "#5956CC");

    context.setLineWidth(4);
    // context.setStrokeStyle(gradient);
    context.setStrokeStyle('#FF5E0B')
    context.setLineCap('round')
    context.beginPath();

    context.arc(this.data.width / 2, this.data.height / 2, this.data.radius, -Math.PI / 2, Math.PI * (2 * step - 0.5), false);
    context.stroke()

    context.draw()
  }
})