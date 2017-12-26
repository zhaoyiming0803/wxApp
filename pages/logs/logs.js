//logs.js
// const util = require('../../utils/util.js')

import wxUtil from "../../utils/util.js";
console.log(wxUtil);

const app = getApp();

Page({
  onLoad: (options) => {
	console.log(options);
	console.log(app.globalData.num);
  }
})
