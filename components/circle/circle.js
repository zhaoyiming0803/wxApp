Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  properties: {
    bg: {            
      type: String,   
      value: 'bg'
    },
    draw: {
      type: String,
      value: 'draw'
    },
  },

  data: { 
    size: 0, // 圆环盒子大小 size >= 2 * x ( x为canvas的绘制半径 )
    step: 0 // step从0到1为一周
  },

  methods: {
    drawCircleBg (id, x, w) {
      // 设置圆环外面盒子大小 宽高都等于圆环直径
      this.setData({
        size: 2 * x
      });
      const ctx = wx.createCanvasContext(id, this);
      ctx.setLineWidth(w);
      ctx.setStrokeStyle('#20183b');
      ctx.setLineCap('round');
      ctx.beginPath();
      ctx.arc(x, x, x - w, 0, 2 * Math.PI, false);
      ctx.stroke();
      ctx.draw();
    },

    drawCircle (id, x, w, step) {
      const context = wx.createCanvasContext(id, this);
      context.setLineWidth(w);
      context.setStrokeStyle('red');
      context.setLineCap('round');
      context.beginPath();
      context.arc(x, x, x-w, 0, Math.PI * 2 * step, false);
      context.stroke();
      context.draw();
    }
  }

})